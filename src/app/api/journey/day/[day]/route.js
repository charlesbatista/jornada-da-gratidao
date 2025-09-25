import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { toYmd } from '@/app/utils/date'

// PUT - Atualizar dia específico
export async function PUT(request, { params }) {
  try {
    const { day } = await params
    const dayNumber = parseInt(day)
    const { isCompleted, reflection, difficulty } = await request.json()

    console.log('Dados recebidos na API:', { dayNumber, isCompleted, reflection, difficulty })

    // Validar dayNumber
    if (isNaN(dayNumber) || dayNumber < 1) {
      return NextResponse.json({ error: 'Número do dia inválido' }, { status: 400 })
    }

    // Buscar a jornada ativa
    const journey = await prisma.journey.findFirst({
      orderBy: { createdAt: 'desc' }
    })

    if (!journey) {
      return NextResponse.json({ error: 'Nenhuma jornada encontrada' }, { status: 404 })
    }

    // Preparar os dados para atualização
    const updateData = {
      isCompleted: Boolean(isCompleted),
      reflection: reflection || null,
      difficulty: difficulty || null,
      completedAt: isCompleted ? toYmd(new Date()) : null
    }

    console.log('Dados para atualizar:', updateData)

    // Atualizar o dia
    const updatedDay = await prisma.day.update({
      where: {
        journeyId_dayNumber: {
          journeyId: journey.id,
          dayNumber: dayNumber
        }
      },
      data: updateData
    })

    console.log('Dia atualizado no banco:', updatedDay)

    // IMPORTANTE: Retornar o dia atualizado no formato correto
    return NextResponse.json({ 
      success: true,
      day: updatedDay 
    })

  } catch (error) {
    console.error('Erro ao atualizar dia:', error)
    
    // Se for erro do Prisma (registro não encontrado)
    if (error.code === 'P2025') {
      return NextResponse.json({ 
        error: 'Dia não encontrado na jornada' 
      }, { status: 404 })
    }
    
    return NextResponse.json({ 
      error: 'Erro interno do servidor',
      details: error.message 
    }, { status: 500 })
  }
}