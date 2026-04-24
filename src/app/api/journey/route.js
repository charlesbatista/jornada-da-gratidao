import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

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

// PATCH - Estender jornada existente para mais dias
export async function PATCH(request) {
  try {
    const { newTotalDays } = await request.json();

    if (!Number.isInteger(newTotalDays) || newTotalDays <= 0 || newTotalDays > 365) {
      return NextResponse.json({ error: 'Número de dias inválido. Use um valor entre 1 e 365.' }, { status: 400 });
    }

    const journey = await prisma.journey.findFirst({ orderBy: { createdAt: 'desc' } });

    if (!journey) {
      return NextResponse.json({ error: 'Nenhuma jornada encontrada.' }, { status: 404 });
    }

    if (newTotalDays <= journey.totalDays) {
      return NextResponse.json({ error: 'O novo total deve ser maior que o atual.' }, { status: 400 });
    }

    // Criar apenas os dias que ainda não existem
    const existingDaysCount = journey.totalDays;
    const newDays = Array.from({ length: newTotalDays - existingDaysCount }, (_, i) => ({
      journeyId: journey.id,
      dayNumber: existingDaysCount + i + 1,
      isCompleted: false,
    }));

    await prisma.$transaction([
      prisma.journey.update({ where: { id: journey.id }, data: { totalDays: newTotalDays } }),
      prisma.day.createMany({ data: newDays }),
    ]);

    const updatedJourney = await prisma.journey.findUnique({
      where: { id: journey.id },
      include: { days: { orderBy: { dayNumber: 'asc' } } },
    });

    return NextResponse.json({ journey: updatedJourney });
  } catch (error) {
    console.error('Erro ao estender jornada:', error);
    return NextResponse.json({ error: 'Erro interno do servidor.' }, { status: 500 });
  }
}

export const runtime = 'nodejs'; // Garantir que rode no Node.js (não Edge)