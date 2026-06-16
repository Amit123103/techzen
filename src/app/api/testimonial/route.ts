import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase/server';

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const { data, error } = await supabaseAdmin
      .from('testimonials')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(3);

    if (error) {
      if (error.code === '42P01') return NextResponse.json([]); // Table doesn't exist
      throw error;
    }

    return NextResponse.json(data, {
      headers: {
        'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0',
      },
    });
  } catch (error: any) {
    console.error("Error fetching testimonials:", error);
    return NextResponse.json({ error: "Failed to fetch testimonials" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Store in Supabase
    const { data: dbData, error } = await supabaseAdmin
      .from('testimonials')
      .insert([{
        ...data,
        approved: true // In a real app, you might want this false until moderated
      } as any])
      .select()
      .single();

    if (error) throw error;

    return NextResponse.json({ success: true, id: dbData?.id });
  } catch (error) {
    console.error("Error saving testimonial:", error);
    return NextResponse.json({ error: 'Failed to save testimonial' }, { status: 500 });
  }
}
