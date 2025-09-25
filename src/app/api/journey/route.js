import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { isValidYmd } from '@/app/utils/date'

// GET - Buscar jornada ativa
export async function GET() {
  try {
    const journey = await prisma.journey.findFirst({
      orderBy: { createdAt: 'desc' },
      include: {
        days: {
          orderBy: { dayNumber: 'asc' }
        }
      }
    })

    return NextResponse.json({ journey })
  } catch (error) {
    console.error('Erro ao buscar jornada:', error)
    return NextResponse.json({ error: 'Erro interno do servidor' }, { status: 500 })
  }
}

// POST - Criar nova jornada
export async function POST(request) {
  try {
    const { startDateYmd, totalDays } = await request.json(); 

    // Validar formato da data
    if (!isValidYmd(startDateYmd)) {
      return NextResponse.json({ 
        error: 'Data inválida. Use o formato YYYY-MM-DD (ex: 2025-01-15)' + startDateYmd
      }, { status: 400 });
    }

    // Validar totalDays
    if (!Number.isInteger(totalDays) || totalDays <= 0 || totalDays > 365) {
      return NextResponse.json({ 
        error: 'Número de dias inválido. Use um valor entre 1 e 365.' 
      }, { status: 400 });
    }

    // Zera qualquer jornada anterior
    await prisma.journey.deleteMany({});

    // Cria a nova jornada salvando a STRING de calendário
    const journey = await prisma.journey.create({
      data: {
        startDate: startDateYmd, // Salvar como string no formato YYYY-MM-DD
        totalDays,
        days: {
          create: Array.from({ length: totalDays }, (_, i) => ({
            dayNumber: i + 1,
            isCompleted: false,
          })),
        },
      },
      include: {
        days: { orderBy: { dayNumber: 'asc' } },
      },
    });

    return NextResponse.json({ journey }, { status: 201 });
  } catch (error) {
    console.error('Erro ao criar jornada:', error);
    return NextResponse.json({ 
      error: 'Erro interno do servidor. Tente novamente.' 
    }, { status: 500 });
  }
}

// DELETE - Deletar jornada (resetar)
export async function DELETE() {
  try {
    await prisma.journey.deleteMany({})
    return NextResponse.json({ message: 'Jornada resetada com sucesso' })
  } catch (error) {
    console.error('Erro ao resetar jornada:', error)
    return NextResponse.json({ error: 'Erro interno do servidor' }, { status: 500 })
  }
}