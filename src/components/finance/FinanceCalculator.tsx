'use client'

import { useState } from 'react'
import type { PropertyTier, ServicePlan } from '@/data/pricing'

type CalculatorMode = 'property' | 'service'

interface PropertyProps {
  mode: 'property'
  data: PropertyTier[]
  title?: string
}

interface ServiceProps {
  mode: 'service'
  data: ServicePlan[]
  title?: string
}

type Props = PropertyProps | ServiceProps

function formatPeso(n: number) {
  return '₱' + n.toLocaleString('en-PH', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
}

export default function FinanceCalculator(props: Props) {
  const { mode, title } = props
  const isProperty = mode === 'property'

  const [selectedTier, setSelectedTier] = useState(0)
  const [selectedTerm, setSelectedTerm] = useState(0)
  const [selectedFreq, setSelectedFreq] = useState(0)

  if (isProperty) {
    const pData = (props as PropertyProps).data
    if (!pData.length) return null
    const tier = pData[selectedTier] || pData[0]
    const term = tier.terms[selectedTerm] || tier.terms[0]
    const freq = term.frequencies[selectedFreq] || term.frequencies[0]
    const row = freq.rows[0]

    return (
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-2">Finance Calculator</p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary">{title || 'Plan Your Payments'}</h2>
          </div>
          <div className="bg-cream rounded-xl p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div>
                <label className="block text-xs font-semibold text-primary mb-1.5 uppercase tracking-wider">Tier</label>
                <select
                  value={selectedTier}
                  onChange={(e) => { setSelectedTier(Number(e.target.value)); setSelectedTerm(0); setSelectedFreq(0) }}
                  className="w-full px-3 py-2.5 rounded text-sm bg-white border border-primary/10 text-primary focus:outline-none focus:border-gold"
                >
                  {pData.map((t, i) => <option key={t.name} value={i}>{t.name}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-primary mb-1.5 uppercase tracking-wider">Term</label>
                <select
                  value={selectedTerm}
                  onChange={(e) => { setSelectedTerm(Number(e.target.value)); setSelectedFreq(0) }}
                  className="w-full px-3 py-2.5 rounded text-sm bg-white border border-primary/10 text-primary focus:outline-none focus:border-gold"
                >
                  {tier.terms.map((t, i) => <option key={t.label} value={i}>{t.label}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-primary mb-1.5 uppercase tracking-wider">Frequency</label>
                <select
                  value={selectedFreq}
                  onChange={(e) => setSelectedFreq(Number(e.target.value))}
                  className="w-full px-3 py-2.5 rounded text-sm bg-white border border-primary/10 text-primary focus:outline-none focus:border-gold"
                >
                  {term.frequencies.map((f, i) => <option key={f.label} value={i}>{f.label}</option>)}
                </select>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white rounded-lg p-4 text-center">
                <p className="text-xs text-primary/50 uppercase tracking-wider mb-1">Contract Price</p>
                <p className="text-lg font-bold text-primary">{formatPeso(tier.contractPrice)}</p>
              </div>
              <div className="bg-white rounded-lg p-4 text-center">
                <p className="text-xs text-primary/50 uppercase tracking-wider mb-1">Downpayment</p>
                <p className="text-lg font-bold text-gold">{formatPeso(row.downpayment)}</p>
              </div>
              <div className="bg-white rounded-lg p-4 text-center">
                <p className="text-xs text-primary/50 uppercase tracking-wider mb-1">
                  {freq.label} ({row.installments}x)
                </p>
                <p className="text-lg font-bold text-primary">{formatPeso(row.payment)}</p>
              </div>
              <div className="bg-white rounded-lg p-4 text-center">
                <p className="text-xs text-primary/50 uppercase tracking-wider mb-1">Total Paid</p>
                <p className="text-lg font-bold text-primary">{formatPeso(row.totalPaid)}</p>
              </div>
            </div>
            <p className="text-xs text-primary/40 mt-4 text-center">
              Transfer fee: {formatPeso(tier.transferFee)} payable to RMMI
            </p>
          </div>
        </div>
      </section>
    )
  }

  const sData = (props as ServiceProps).data
  if (!sData.length) return null

  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-10">
          <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-2">Finance Calculator</p>
          <h2 className="text-3xl md:text-4xl font-bold text-primary">{title || 'Plan Your Payments'}</h2>
        </div>
        <div className="bg-cream rounded-xl p-6 md:p-8">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-primary/10">
                  <th className="text-left py-3 px-3 text-primary font-bold">Plan</th>
                  <th className="text-center py-3 px-3 text-primary font-bold">Contract Price</th>
                  <th className="text-center py-3 px-3 text-primary font-bold">Spot Cash (10%)</th>
                  <th className="text-center py-3 px-3 text-primary font-bold">Family Spot Cash (15%)</th>
                  <th className="text-center py-3 px-3 text-primary font-bold">Annual</th>
                  <th className="text-center py-3 px-3 text-primary font-bold">Semi-Annual</th>
                  <th className="text-center py-3 px-3 text-primary font-bold">Quarterly</th>
                  <th className="text-center py-3 px-3 text-primary font-bold">Monthly</th>
                </tr>
              </thead>
              <tbody>
                {sData.map((plan) => (
                  <tr key={plan.name} className="border-b border-primary/5 hover:bg-white/50 transition-colors">
                    <td className="py-3 px-3 font-bold text-primary">{plan.name}</td>
                    <td className="text-center py-3 px-3 text-primary">{formatPeso(plan.contractPrice)}</td>
                    <td className="text-center py-3 px-3 text-gold font-semibold">{formatPeso(plan.spotCash)}</td>
                    <td className="text-center py-3 px-3 text-gold font-semibold">{formatPeso(plan.familySpotCash)}</td>
                    <td className="text-center py-3 px-3 text-primary">{formatPeso(plan.annual)}</td>
                    <td className="text-center py-3 px-3 text-primary">{formatPeso(plan.semiAnnual)}</td>
                    <td className="text-center py-3 px-3 text-primary">{formatPeso(plan.quarterly)}</td>
                    <td className="text-center py-3 px-3 text-primary">{formatPeso(plan.monthly)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}
