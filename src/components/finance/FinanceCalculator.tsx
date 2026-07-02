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
                  {freq.label} ({row.installments}check)
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

  const [selectedPlan, setSelectedPlan] = useState(0)
  const [selectedPayMode, setSelectedPayMode] = useState<'spot' | 'installment'>('spot')
  const [selectedFreqSvc, setSelectedFreqSvc] = useState(0)

  const plan = sData[selectedPlan] || sData[0]

  const installmentOptions = [
    { label: 'Annual (5check)', payment: plan.annual, installments: 5 },
    { label: 'Semi-Annual (5check)', payment: plan.semiAnnual, installments: 10 },
    { label: 'Quarterly (5check)', payment: plan.quarterly, installments: 20 },
    { label: 'Monthly (5check)', payment: plan.monthly, installments: 50 },
  ]

  const freqSvc = installmentOptions[selectedFreqSvc] || installmentOptions[0]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-10">
          <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-2">Finance Calculator</p>
          <h2 className="text-3xl md:text-4xl font-bold text-primary">{title || 'Plan Your Payments'}</h2>
        </div>

        <div className="bg-cream rounded-xl p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div>
              <label className="block text-xs font-semibold text-primary mb-1.5 uppercase tracking-wider">Plan</label>
              <select
                value={selectedPlan}
                onChange={(e) => { setSelectedPlan(Number(e.target.value)); setSelectedPayMode('spot'); setSelectedFreqSvc(0) }}
                className="w-full px-3 py-2.5 rounded text-sm bg-white border border-primary/10 text-primary focus:outline-none focus:border-gold"
              >
                {sData.map((p, i) => <option key={p.name} value={i}>{p.name}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-primary mb-1.5 uppercase tracking-wider">Payment Mode</label>
              <select
                value={selectedPayMode}
                onChange={(e) => setSelectedPayMode(e.target.value as 'spot' | 'installment')}
                className="w-full px-3 py-2.5 rounded text-sm bg-white border border-primary/10 text-primary focus:outline-none focus:border-gold"
              >
                <option value="spot">Spot Cash</option>
                <option value="installment">Installment</option>
              </select>
            </div>
          </div>

          {selectedPayMode === 'spot' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white rounded-lg p-5 text-center border border-primary/5">
                <p className="text-xs text-primary/50 uppercase tracking-wider mb-1">Contract Price</p>
                <p className="text-2xl font-bold text-primary">{formatPeso(plan.contractPrice)}</p>
              </div>
              <div className="bg-white rounded-lg p-5 text-center border border-gold/20 ring-1 ring-gold/30">
                <p className="text-xs text-gold uppercase tracking-wider mb-1">Recommended — Spot Cash (10% off)</p>
                <p className="text-2xl font-bold text-gold">{formatPeso(plan.spotCash)}</p>
                <p className="text-xs text-primary/40 mt-1">Save {formatPeso(plan.contractPrice - plan.spotCash)}</p>
              </div>
              <div className="bg-white rounded-lg p-5 text-center border border-primary/5">
                <p className="text-xs text-primary/50 uppercase tracking-wider mb-1">Family Spot Cash (15% off)</p>
                <p className="text-2xl font-bold text-primary">{formatPeso(plan.familySpotCash)}</p>
                <p className="text-xs text-primary/40 mt-1">Save {formatPeso(plan.contractPrice - plan.familySpotCash)}</p>
              </div>
            </div>
          ) : (
            <>
              <div className="mb-6">
                <label className="block text-xs font-semibold text-primary mb-1.5 uppercase tracking-wider">Frequency</label>
                <select
                  value={selectedFreqSvc}
                  onChange={(e) => setSelectedFreqSvc(Number(e.target.value))}
                  className="w-full px-3 py-2.5 rounded text-sm bg-white border border-primary/10 text-primary focus:outline-none focus:border-gold"
                >
                  {installmentOptions.map((o, i) => <option key={o.label} value={i}>{o.label}</option>)}
                </select>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white rounded-lg p-4 text-center">
                  <p className="text-xs text-primary/50 uppercase tracking-wider mb-1">Contract Price</p>
                  <p className="text-lg font-bold text-primary">{formatPeso(plan.contractPrice)}</p>
                </div>
                <div className="bg-white rounded-lg p-4 text-center">
                  <p className="text-xs text-primary/50 uppercase tracking-wider mb-1">
                    {freqSvc.label.split(' (')[0]} ({freqSvc.installments}check)
                  </p>
                  <p className="text-lg font-bold text-gold">{formatPeso(freqSvc.payment)}</p>
                </div>
                <div className="bg-white rounded-lg p-4 text-center">
                  <p className="text-xs text-primary/50 uppercase tracking-wider mb-1">Total Paid</p>
                  <p className="text-lg font-bold text-primary">{formatPeso(freqSvc.payment * freqSvc.installments)}</p>
                </div>
              </div>
            </>
          )}
        </div>

        <div className="bg-cream rounded-xl p-6 md:p-8 mt-6">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-primary/10">
                  <th className="text-left py-2 px-1.5 md:py-3 md:px-3 text-primary font-bold text-xs md:text-sm">Plan</th>
                  <th className="text-center py-2 px-1.5 md:py-3 md:px-3 text-primary font-bold text-xs md:text-sm">Contract Price</th>
                  <th className="text-center py-2 px-1.5 md:py-3 md:px-3 text-primary font-bold text-xs md:text-sm">Annual (5check)</th>
                  <th className="text-center py-2 px-1.5 md:py-3 md:px-3 text-primary font-bold text-xs md:text-sm hidden sm:table-cell">Semi-Annual (5check)</th>
                  <th className="text-center py-2 px-1.5 md:py-3 md:px-3 text-primary font-bold text-xs md:text-sm hidden sm:table-cell">Quarterly (5check)</th>
                  <th className="text-center py-2 px-1.5 md:py-3 md:px-3 text-primary font-bold text-xs md:text-sm hidden sm:table-cell">Monthly (5check)</th>
                </tr>
              </thead>
              <tbody>
                {sData.map((p) => (
                  <tr key={p.name} className={`border-b border-primary/5 hover:bg-white/50 transition-colors ${p.name === plan.name ? 'bg-gold/5' : ''}`}>
                    <td className="py-2 px-1.5 md:py-3 md:px-3 font-bold text-primary text-xs md:text-sm">{p.name}</td>
                    <td className="text-center py-2 px-1.5 md:py-3 md:px-3 text-primary text-xs md:text-sm">{formatPeso(p.contractPrice)}</td>
                    <td className="text-center py-2 px-1.5 md:py-3 md:px-3 text-primary text-xs md:text-sm">{formatPeso(p.annual)}</td>
                    <td className="text-center py-2 px-1.5 md:py-3 md:px-3 text-primary text-xs md:text-sm hidden sm:table-cell">{formatPeso(p.semiAnnual)}</td>
                    <td className="text-center py-2 px-1.5 md:py-3 md:px-3 text-primary text-xs md:text-sm hidden sm:table-cell">{formatPeso(p.quarterly)}</td>
                    <td className="text-center py-2 px-1.5 md:py-3 md:px-3 text-primary text-xs md:text-sm hidden sm:table-cell">{formatPeso(p.monthly)}</td>
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
