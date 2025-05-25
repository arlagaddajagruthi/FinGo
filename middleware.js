// The clerkMiddleware helper enables authentication and is where you'll configure your protected routes.

import arcjet, { createMiddleware, detectBot, shield } from '@arcjet/next';
import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

// created protectedRoute to ensure that if a user didnot sign in to the page he is not allowed to go to transaction page or dashboard because it has to meet the authentication
const isProtectedRoute =createRouteMatcher(["/dashboard(.*)","/account(.*),/transaction(.*)"])

const aj=arcjet({
  // Your Arcjet configuration
  key:process.env.ARCJET_KEY,
  rules:[
    shield({
      mode:'LIVE'
    }
    ),
    detectBot({
      mode:'LIVE',
      allow:["CATEGORY:SEARCH_ENGINE","GO_HTTP"],
    }),
  ],
});
const clerk= clerkMiddleware(async (auth,req)=>
    {const {userId}=await auth();
    // if user is not signed in then it will go back to signin page or redirect
    if(!userId && isProtectedRoute(req)){
        const {redirectToSignIn}=await auth();
        return redirectToSignIn();
    }
});
export default createMiddleware(aj,clerk);

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};