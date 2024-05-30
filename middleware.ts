import {createRouteMatcher, clerkMiddleware } from "@clerk/nextjs/server";

const isPublicRoute = createRouteMatcher(['/sign-in', '/sign-up', '/', '/api/webhook']);

const isDashboardRoute = createRouteMatcher(['/dashboard(.*)']);

export default clerkMiddleware((auth, request) =>{

    if(!isPublicRoute(request)){
      auth().protect();
    }

});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};