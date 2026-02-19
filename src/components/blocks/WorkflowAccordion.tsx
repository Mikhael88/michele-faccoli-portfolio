 'use client'

import { FC } from 'react'

export interface WorkflowStep {
  title: string
  description?: string
  details?: string
}

interface WorkflowAccordionProps {
  steps: WorkflowStep[]
  theme: 'orange' | 'blue'
}

export const WorkflowAccordion: FC<WorkflowAccordionProps> = () => {
  return null
}

