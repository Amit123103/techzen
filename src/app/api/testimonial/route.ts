import { NextResponse } from 'next/server';
import { adminDb } from '@/lib/firebase/admin';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Store in Firebase Firestore
    const docRef = await adminDb.collection('testimonials').add({
      ...data,
      createdAt: new Date().toISOString(),
      approved: true // In a real app, you might want this false until moderated
    });

    return NextResponse.json({ success: true, id: docRef.id });
  } catch (error) {
    console.error("Error saving testimonial:", error);
    return NextResponse.json({ error: 'Failed to save testimonial' }, { status: 500 });
  }
}
