import { NextResponse } from 'next/server';
import axios from 'axios';

const BASE_URL = "http://localhost:8800/tasks"

export async function GET() {
  try {
    const response = await axios.get(BASE_URL);
    return NextResponse.json(response.data);
  } catch (error) {
    return NextResponse.json({ error: 'Error fetching tasks' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const taskData = await request.json();
    const response = await axios.post(BASE_URL, taskData);
    return NextResponse.json(response.data);
  } catch (error) {
    return NextResponse.json({ error: 'Error creating task' }, { status: 500 });
  }
}
