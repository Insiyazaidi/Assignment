import { NextResponse } from 'next/server'

// In-memory store (replace with a real DB like Supabase/MongoDB in production)
const leads = []

export async function POST(request) {
  try {
    const body = await request.json()
    const { name, email, company, teamSize, phone } = body

    // Basic validation
    if (!name || !email || !company) {
      return NextResponse.json(
        { success: false, message: 'Name, email, and company are required.' },
        { status: 400 }
      )
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: 'Please provide a valid email address.' },
        { status: 400 }
      )
    }

    const lead = {
      id: Date.now().toString(),
      name,
      email,
      company,
      teamSize: teamSize || 'Not specified',
      phone: phone || '',
      createdAt: new Date().toISOString(),
    }

    leads.push(lead)

    console.log('New lead captured:', lead)

    return NextResponse.json({
      success: true,
      message: "Thank you! We'll be in touch within 24 hours.",
      leadId: lead.id,
    })
  } catch (error) {
    console.error('Lead capture error:', error)
    return NextResponse.json(
      { success: false, message: 'Something went wrong. Please try again.' },
      { status: 500 }
    )
  }
}

export async function GET() {
  // In production, this would be protected
  return NextResponse.json({ leads, total: leads.length })
}
