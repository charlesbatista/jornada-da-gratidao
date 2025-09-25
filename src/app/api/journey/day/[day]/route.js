import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

// PUT - Atualizar dia específico
export async function PUT(request, { params }) {
  try {
    const dayNumber = parseInt(params.day)
    const { isCompleted, reflection, difficulty } = await request.json()

    // Buscar a jornada ativa
    const journey = await prisma.journey.findFirst({
      orderBy: { createdAt: 'desc' }
    })

    if (!journey) {
      return NextResponse.json({ error: 'Nenhuma jornada encontrada' }, { status: 404 })
    }

    // Atualizar o dia
    const updatedDay = await prisma.day.update({
      where: {
        journeyId_dayNumber: {
          journeyId: journey.id,
          dayNumber: dayNumber
        }
      },
      data: {
        isCompleted,
        reflection,
        difficulty,
        completedAt: isCompleted ? new Date() : null
      }
    })

    return NextResponse.json({ day: updatedDay })
  } catch (error) {
    console.error('Erro ao atualizar dia:', error)
    return NextResponse.json({ error: 'Erro interno do servidor' }, { status: 500 })
  }
}