import { NextResponse } from 'next/server';
import axios from 'axios';

import { BASE_URL } from '../config';

export async function GET(
  { params }: { params: { id: string } }
) {
  const { id } = params;

  try {
    const response = await axios.get(`${BASE_URL}/${id}`);
    return NextResponse.json(response.data);
  } catch (error) {
    return NextResponse.json({ error: 'Error fetching tasks' }, { status: 500 });
  }
}

export async function PUT(
  request: Request, { params }: { params: { id: string } }
) {
  const { id } = params;
  const taskData = await request.json();

  try {
    const response = await axios.put(`${BASE_URL}/${id}`, taskData
    );
    return NextResponse.json(response.data);
  } catch (error) {
    return NextResponse.json({ error: 'Error updating task' }, { status: 500 });
  }
}
