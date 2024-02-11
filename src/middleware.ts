import { auth } from "./auth"
import {NextResponse} from "next/server";

export async function middleware() {
	const session = await auth();
	if (!session) {
		return NextResponse.redirect('/login');
	}
}

// See "Matching Paths" below to learn more
export const config = {
	matcher: [],
}