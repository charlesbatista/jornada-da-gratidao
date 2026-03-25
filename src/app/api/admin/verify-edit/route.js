import { NextResponse } from 'next/server'

// Rota server-side que valida a senha de edição definida em `process.env.EDIT_PASSWORD`
export async function POST(request) {
  try {
    const { password } = await request.json();

    if (!password) {
      return NextResponse.json({ error: 'Senha não informada' }, { status: 400 });
    }

    // Comparação simples com variável server-only. Para produção, prefira hash (bcrypt) e/ou um sistema de autenticação.
    if (password !== process.env.EDIT_PASSWORD) {
      return NextResponse.json({ error: 'Não autorizado' }, { status: 401 });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Erro em /api/admin/verify-edit:', error);
    return NextResponse.json({ error: 'Erro interno' }, { status: 500 });
  }
}
