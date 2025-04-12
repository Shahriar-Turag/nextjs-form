import { NextResponse } from 'next/server';

export async function POST(request: Request) {
	const data = await request.json();

	console.log('🟢 API received:', data);

	return NextResponse.json({
		success: true,
		message: 'Form submitted successfully',
	});
}
