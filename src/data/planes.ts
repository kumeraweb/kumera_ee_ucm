export interface PlanRescate {
  id: string
  nombre: string
  precioDesde: string
  unidad: string // UF o Pesos
  caracteristicas: string[]
  destacado: boolean
}

export const PLANES: PlanRescate[] = [
  {
    id: 'full-rescue',
    nombre: 'Full Rescue Individual',
    precioDesde: '0,59',
    unidad: 'UF',
    caracteristicas: [
      'Rescate Emergencia 24/7',
      'Atención Médica Telefónica',
      'Sin límite de eventos'
    ],
    destacado: true
  },
  {
    id: 'senior',
    nombre: 'Protección Senior',
    precioDesde: '1,0',
    unidad: 'UF',
    caracteristicas: [
      'Especial para +75 años',
      'Copago $0 en centros médicos',
      'Traslados programados'
    ],
    destacado: false
  },
  {
    id: 'traslados',
    nombre: 'Convenio Traslados',
    precioDesde: '85.000',
    unidad: '$',
    caracteristicas: [
      'Traslados de alta complejidad',
      'Equipamiento UTI móvil',
      'Cobertura Inter-regiones'
    ],
    destacado: false
  }
]
