export interface InstallmentRow {
  payment: number
  installments: number
  downpayment: number
  totalPaid: number
}

export interface PropertyTier {
  name: string
  contractPrice: number
  transferFee: number
  terms: { label: string; frequencies: { label: string; rows: InstallmentRow[] }[] }[]
}

export interface ServicePlan {
  name: string
  contractPrice: number
  spotCash: number
  familySpotCash: number
  annual: number
  semiAnnual: number
  quarterly: number
  monthly: number
}

export const lawnLotData: PropertyTier[] = [
  {
    name: 'Lawn Lot Regular',
    contractPrice: 343637.28,
    transferFee: 5000,
    terms: [
      { label: '1 Year', frequencies: [
        { label: 'Monthly', rows: [{ payment: 31259.50, installments: 11, downpayment: 66473.08, totalPaid: 410327.58 }] },
        { label: 'Quarterly', rows: [{ payment: 100081.37, installments: 3, downpayment: 58042.42, totalPaid: 358286.53 }] },
        { label: 'Semi-Annual', rows: [{ payment: 300291.38, installments: 1, downpayment: 58051.55, totalPaid: 358342.93 }] },
      ]},
      { label: '2 Years', frequencies: [
        { label: 'Monthly', rows: [{ payment: 15506.05, installments: 23, downpayment: 68944.59, totalPaid: 425583.74 }] },
        { label: 'Quarterly', rows: [{ payment: 44583.67, installments: 7, downpayment: 60331.60, totalPaid: 372417.29 }] },
        { label: 'Semi-Annual', rows: [{ payment: 104061.04, installments: 3, downpayment: 60350.44, totalPaid: 372533.56 }] },
        { label: 'Annual', rows: [{ payment: 312378.04, installments: 1, downpayment: 60388.12, totalPaid: 372766.16 }] },
      ]},
      { label: '3 Years', frequencies: [
        { label: 'Monthly', rows: [{ payment: 10557.80, installments: 35, downpayment: 71435.26, totalPaid: 440958.26 }] },
        { label: 'Quarterly', rows: [{ payment: 29462.88, installments: 11, downpayment: 62652.55, totalPaid: 386744.23 }] },
        { label: 'Semi-Annual', rows: [{ payment: 64848.40, installments: 5, downpayment: 62681.63, totalPaid: 386923.63 }] },
        { label: 'Annual', rows: [{ payment: 162271.56, installments: 2, downpayment: 62739.84, totalPaid: 387282.96 }] },
      ]},
      { label: '5 Years', frequencies: [
        { label: 'Monthly', rows: [{ payment: 6707.41, installments: 59, downpayment: 76502.87, totalPaid: 472240.06 }] },
        { label: 'Quarterly', rows: [{ payment: 18344.20, installments: 19, downpayment: 67378.83, totalPaid: 415918.63 }] },
        { label: 'Semi-Annual', rows: [{ payment: 38756.05, installments: 9, downpayment: 67429.97, totalPaid: 416234.42 }] },
        { label: 'Annual', rows: [{ payment: 87333.59, installments: 4, downpayment: 67532.42, totalPaid: 416866.78 }] },
      ]},
    ],
  },
  {
    name: 'Lawn Lot Premium',
    contractPrice: 400909.60,
    transferFee: 5000,
    terms: [
      { label: '1 Year', frequencies: [
        { label: 'Monthly', rows: [{ payment: 36469.42, installments: 11, downpayment: 77551.92, totalPaid: 478715.54 }] },
        { label: 'Quarterly', rows: [{ payment: 116761.60, installments: 3, downpayment: 67716.16, totalPaid: 418000.96 }] },
        { label: 'Semi-Annual', rows: [{ payment: 350339.94, installments: 1, downpayment: 67726.81, totalPaid: 418066.75 }] },
      ]},
      { label: '2 Years', frequencies: [
        { label: 'Monthly', rows: [{ payment: 18090.40, installments: 23, downpayment: 80435.36, totalPaid: 496514.56 }] },
        { label: 'Quarterly', rows: [{ payment: 52014.29, installments: 7, downpayment: 70386.87, totalPaid: 434486.90 }] },
        { label: 'Semi-Annual', rows: [{ payment: 121404.54, installments: 3, downpayment: 70408.84, totalPaid: 434622.46 }] },
        { label: 'Annual', rows: [{ payment: 364441.03, installments: 1, downpayment: 70452.80, totalPaid: 434893.83 }] },
      ]},
      { label: '3 Years', frequencies: [
        { label: 'Monthly', rows: [{ payment: 12317.44, installments: 35, downpayment: 83341.13, totalPaid: 514451.53 }] },
        { label: 'Quarterly', rows: [{ payment: 34373.35, installments: 11, downpayment: 73094.65, totalPaid: 451201.50 }] },
        { label: 'Semi-Annual', rows: [{ payment: 75656.47, installments: 5, downpayment: 73128.56, totalPaid: 451410.91 }] },
        { label: 'Annual', rows: [{ payment: 189316.80, installments: 2, downpayment: 73196.48, totalPaid: 451830.08 }] },
      ]},
      { label: '5 Years', frequencies: [
        { label: 'Monthly', rows: [{ payment: 7825.31, installments: 59, downpayment: 89253.35, totalPaid: 550946.64 }] },
        { label: 'Quarterly', rows: [{ payment: 21401.58, installments: 19, downpayment: 78608.63, totalPaid: 485238.65 }] },
        { label: 'Semi-Annual', rows: [{ payment: 45215.39, installments: 9, downpayment: 78668.31, totalPaid: 485606.82 }] },
        { label: 'Annual', rows: [{ payment: 101889.19, installments: 4, downpayment: 78787.82, totalPaid: 486344.58 }] },
      ]},
    ],
  },
  {
    name: 'Lawn Lot Special Premium',
    contractPrice: 458181.92,
    transferFee: 5000,
    terms: [
      { label: '1 Year', frequencies: [
        { label: 'Monthly', rows: [{ payment: 41679.34, installments: 11, downpayment: 88630.77, totalPaid: 547103.51 }] },
        { label: 'Quarterly', rows: [{ payment: 133441.84, installments: 3, downpayment: 77389.89, totalPaid: 477715.41 }] },
        { label: 'Semi-Annual', rows: [{ payment: 400388.51, installments: 1, downpayment: 77402.07, totalPaid: 477790.58 }] },
      ]},
      { label: '2 Years', frequencies: [
        { label: 'Monthly', rows: [{ payment: 20674.74, installments: 23, downpayment: 91926.13, totalPaid: 567445.15 }] },
        { label: 'Quarterly', rows: [{ payment: 59444.90, installments: 7, downpayment: 80442.14, totalPaid: 496556.44 }] },
        { label: 'Semi-Annual', rows: [{ payment: 138748.05, installments: 3, downpayment: 80467.25, totalPaid: 496711.40 }] },
        { label: 'Annual', rows: [{ payment: 416504.04, installments: 1, downpayment: 80517.49, totalPaid: 497021.53 }] },
      ]},
      { label: '3 Years', frequencies: [
        { label: 'Monthly', rows: [{ payment: 14077.07, installments: 35, downpayment: 95247.01, totalPaid: 587944.46 }] },
        { label: 'Quarterly', rows: [{ payment: 39283.83, installments: 11, downpayment: 83536.73, totalPaid: 515658.86 }] },
        { label: 'Semi-Annual', rows: [{ payment: 86464.51, installments: 5, downpayment: 83575.51, totalPaid: 515898.06 }] },
        { label: 'Annual', rows: [{ payment: 216362.07, installments: 2, downpayment: 83653.11, totalPaid: 516377.25 }] },
      ]},
      { label: '5 Years', frequencies: [
        { label: 'Monthly', rows: [{ payment: 8943.21, installments: 59, downpayment: 102003.82, totalPaid: 629653.21 }] },
        { label: 'Quarterly', rows: [{ payment: 24458.94, installments: 19, downpayment: 89838.44, totalPaid: 554558.30 }] },
        { label: 'Semi-Annual', rows: [{ payment: 51674.73, installments: 9, downpayment: 89906.63, totalPaid: 554979.20 }] },
        { label: 'Annual', rows: [{ payment: 116444.79, installments: 4, downpayment: 90043.23, totalPaid: 555822.39 }] },
      ]},
    ],
  },
]

export const gardenLotData: PropertyTier[] = [
  {
    name: 'Garden Lot Regular',
    contractPrice: 2912000.00,
    transferFee: 10000,
    terms: [
      { label: '1 Year', frequencies: [
        { label: 'Monthly', rows: [{ payment: 255198.36, installments: 11, downpayment: 542677.17, totalPaid: 3349859.13 }] },
        { label: 'Quarterly', rows: [{ payment: 815150.86, installments: 3, downpayment: 472748.60, totalPaid: 2918201.18 }] },
        { label: 'Semi-Annual', rows: [{ payment: 2445452.59, installments: 1, downpayment: 472748.60, totalPaid: 2918201.19 }] },
      ]},
      { label: '2 Years', frequencies: [
        { label: 'Monthly', rows: [{ payment: 122054.03, installments: 23, downpayment: 542688.91, totalPaid: 3349931.60 }] },
        { label: 'Quarterly', rows: [{ payment: 349350.37, installments: 7, downpayment: 472748.60, totalPaid: 2918201.19 }] },
        { label: 'Semi-Annual', rows: [{ payment: 815150.86, installments: 3, downpayment: 472748.60, totalPaid: 2918201.18 }] },
        { label: 'Annual', rows: [{ payment: 2445452.59, installments: 1, downpayment: 472748.60, totalPaid: 2918201.19 }] },
      ]},
      { label: '3 Years', frequencies: [
        { label: 'Monthly', rows: [{ payment: 85311.15, installments: 35, downpayment: 577224.57, totalPaid: 3563114.82 }] },
        { label: 'Quarterly', rows: [{ payment: 236918.09, installments: 11, downpayment: 503804.34, totalPaid: 3109903.33 }] },
        { label: 'Semi-Annual', rows: [{ payment: 522879.64, installments: 5, downpayment: 505408.71, totalPaid: 3119806.91 }] },
        { label: 'Annual', rows: [{ payment: 1318614.64, installments: 2, downpayment: 509822.36, totalPaid: 3147051.64 }] },
      ]},
      { label: '5 Years', frequencies: [
        { label: 'Monthly', rows: [{ payment: 55471.42, installments: 59, downpayment: 632691.82, totalPaid: 3905505.60 }] },
        { label: 'Quarterly', rows: [{ payment: 150409.39, installments: 19, downpayment: 552458.38, totalPaid: 3410236.79 }] },
        { label: 'Semi-Annual', rows: [{ payment: 318713.29, installments: 9, downpayment: 554515.49, totalPaid: 3422935.10 }] },
        { label: 'Annual', rows: [{ payment: 723393.45, installments: 4, downpayment: 559378.23, totalPaid: 3452952.03 }] },
      ]},
    ],
  },
  {
    name: 'Garden Lot Special Premium',
    contractPrice: 3584000.00,
    transferFee: 10000,
    terms: [
      { label: '1 Year', frequencies: [
        { label: 'Monthly', rows: [{ payment: 314090.29, installments: 11, downpayment: 667910.38, totalPaid: 4122903.57 }] },
        { label: 'Quarterly', rows: [{ payment: 1003262.60, installments: 3, downpayment: 581844.42, totalPaid: 3591632.22 }] },
        { label: 'Semi-Annual', rows: [{ payment: 3009787.79, installments: 1, downpayment: 581844.42, totalPaid: 3591632.21 }] },
      ]},
      { label: '2 Years', frequencies: [
        { label: 'Monthly', rows: [{ payment: 150220.35, installments: 23, downpayment: 667924.81, totalPaid: 4122992.86 }] },
        { label: 'Quarterly', rows: [{ payment: 429969.68, installments: 7, downpayment: 581844.42, totalPaid: 3591632.18 }] },
        { label: 'Semi-Annual', rows: [{ payment: 1003262.60, installments: 3, downpayment: 581844.42, totalPaid: 3591632.22 }] },
        { label: 'Annual', rows: [{ payment: 3009787.79, installments: 1, downpayment: 581844.42, totalPaid: 3591632.21 }] },
      ]},
      { label: '3 Years', frequencies: [
        { label: 'Monthly', rows: [{ payment: 104998.33, installments: 35, downpayment: 710430.25, totalPaid: 4385371.80 }] },
        { label: 'Quarterly', rows: [{ payment: 291591.50, installments: 11, downpayment: 620066.88, totalPaid: 3827573.38 }] },
        { label: 'Semi-Annual', rows: [{ payment: 643544.17, installments: 5, downpayment: 622041.49, totalPaid: 3839762.34 }] },
        { label: 'Annual', rows: [{ payment: 1622910.33, installments: 2, downpayment: 627473.68, totalPaid: 3873294.34 }] },
      ]},
      { label: '5 Years', frequencies: [
        { label: 'Monthly', rows: [{ payment: 68272.50, installments: 59, downpayment: 778697.63, totalPaid: 4806775.13 }] },
        { label: 'Quarterly', rows: [{ payment: 185119.26, installments: 19, downpayment: 679948.77, totalPaid: 4197214.71 }] },
        { label: 'Semi-Annual', rows: [{ payment: 392262.52, installments: 9, downpayment: 682480.61, totalPaid: 4212843.29 }] },
        { label: 'Annual', rows: [{ payment: 890330.40, installments: 4, downpayment: 688465.51, totalPaid: 4249787.11 }] },
      ]},
    ],
  },
]

export const memoryPlaceData: PropertyTier[] = [
  {
    name: 'Memory Place',
    contractPrice: 4032000.00,
    transferFee: 10000,
    terms: [
      { label: '1 Year', frequencies: [
        { label: 'Monthly', rows: [{ payment: 268800.00, installments: 12, downpayment: 806400.00, totalPaid: 4032000.00 }] },
        { label: 'Quarterly', rows: [{ payment: 806400.00, installments: 4, downpayment: 806400.00, totalPaid: 4032000.00 }] },
        { label: 'Semi-Annual', rows: [{ payment: 1612800.00, installments: 2, downpayment: 806400.00, totalPaid: 4032000.00 }] },
        { label: 'Annual', rows: [{ payment: 3225600.00, installments: 1, downpayment: 806400.00, totalPaid: 4032000.00 }] },
      ]},
      { label: '2 Years', frequencies: [
        { label: 'Monthly', rows: [{ payment: 145885.15, installments: 24, downpayment: 806400.00, totalPaid: 4307643.60 }] },
        { label: 'Quarterly', rows: [{ payment: 440326.01, installments: 8, downpayment: 806400.00, totalPaid: 4329008.08 }] },
        { label: 'Semi-Annual', rows: [{ payment: 888620.69, installments: 4, downpayment: 806400.00, totalPaid: 4360882.76 }] },
        { label: 'Annual', rows: [{ payment: 1808817.23, installments: 2, downpayment: 806400.00, totalPaid: 4424034.46 }] },
      ]},
      { label: '5 Years', frequencies: [
        { label: 'Monthly', rows: [{ payment: 65403.54, installments: 60, downpayment: 806400.00, totalPaid: 4730612.40 }] },
        { label: 'Quarterly', rows: [{ payment: 197267.11, installments: 20, downpayment: 806400.00, totalPaid: 4751742.20 }] },
        { label: 'Semi-Annual', rows: [{ payment: 397687.27, installments: 10, downpayment: 806400.00, totalPaid: 4783272.70 }] },
        { label: 'Annual', rows: [{ payment: 807872.34, installments: 5, downpayment: 806400.00, totalPaid: 4845761.70 }] },
      ]},
    ],
  },
]

export const estateLotData: PropertyTier[] = [
  {
    name: 'Estate Lot Regular',
    contractPrice: 20618181.92,
    transferFee: 25000,
    terms: [
      { label: '1 Year', frequencies: [
        { label: 'Monthly', rows: [{ payment: 1875570.31, installments: 11, downpayment: 3988384.59, totalPaid: 24619658.00 }] },
        { label: 'Quarterly', rows: [{ payment: 6004882.59, installments: 3, downpayment: 3482545.27, totalPaid: 21497193.04 }] },
        { label: 'Semi-Annual', rows: [{ payment: 18017482.47, installments: 1, downpayment: 3483093.26, totalPaid: 21500575.73 }] },
      ]},
      { label: '2 Years', frequencies: [
        { label: 'Monthly', rows: [{ payment: 930363.45, installments: 23, downpayment: 4136675.65, totalPaid: 25535035.00 }] },
        { label: 'Quarterly', rows: [{ payment: 2675020.32, installments: 7, downpayment: 3619896.24, totalPaid: 22345038.48 }] },
        { label: 'Semi-Annual', rows: [{ payment: 6243662.28, installments: 3, downpayment: 3621026.09, totalPaid: 22352012.93 }] },
        { label: 'Annual', rows: [{ payment: 18742681.97, installments: 1, downpayment: 3623286.97, totalPaid: 22365968.94 }] },
      ]},
      { label: '3 Years', frequencies: [
        { label: 'Monthly', rows: [{ payment: 633468.17, installments: 35, downpayment: 4286115.18, totalPaid: 26457501.13 }] },
        { label: 'Quarterly', rows: [{ payment: 1767772.34, installments: 11, downpayment: 3759153.10, totalPaid: 23204648.84 }] },
        { label: 'Semi-Annual', rows: [{ payment: 3890904.14, installments: 5, downpayment: 3760897.80, totalPaid: 23215418.50 }] },
        { label: 'Annual', rows: [{ payment: 9736293.01, installments: 2, downpayment: 3764390.13, totalPaid: 23236976.15 }] },
      ]},
      { label: '5 Years', frequencies: [
        { label: 'Monthly', rows: [{ payment: 402444.46, installments: 59, downpayment: 4590171.97, totalPaid: 28334395.11 }] },
        { label: 'Quarterly', rows: [{ payment: 1100652.24, installments: 19, downpayment: 4042729.81, totalPaid: 24955122.37 }] },
        { label: 'Semi-Annual', rows: [{ payment: 2325362.91, installments: 9, downpayment: 4045798.48, totalPaid: 24974064.67 }] },
        { label: 'Annual', rows: [{ payment: 5240015.38, installments: 4, downpayment: 4051945.06, totalPaid: 25012006.58 }] },
      ]},
    ],
  },
]

export const mortuaryPlans: ServicePlan[] = [
  {
    name: 'Cremation',
    contractPrice: 149240,
    spotCash: 133560,
    familySpotCash: 125720,
    annual: 29848,
    semiAnnual: 15520.96,
    quarterly: 7909.72,
    monthly: 2984.80,
  },
  {
    name: 'Cremation w/ Viewing',
    contractPrice: 373100,
    spotCash: 333900,
    familySpotCash: 314300,
    annual: 74620,
    semiAnnual: 38802.40,
    quarterly: 19774.30,
    monthly: 7462.00,
  },
  {
    name: 'Viewing then Cremation',
    contractPrice: 426400,
    spotCash: 381600,
    familySpotCash: 359200,
    annual: 85280,
    semiAnnual: 44345.60,
    quarterly: 22599.20,
    monthly: 8528.00,
  },
  {
    name: 'Regular',
    contractPrice: 426400,
    spotCash: 381600,
    familySpotCash: 359200,
    annual: 85280,
    semiAnnual: 44345.60,
    quarterly: 22599.20,
    monthly: 8528.00,
  },
  {
    name: 'Premier',
    contractPrice: 639600,
    spotCash: 572400,
    familySpotCash: 538800,
    annual: 127920,
    semiAnnual: 66518.40,
    quarterly: 33898.80,
    monthly: 12792.00,
  },
]

export const intermentPlans: ServicePlan[] = [
  {
    name: 'Interment 1st',
    contractPrice: 74620,
    spotCash: 66780,
    familySpotCash: 62860,
    annual: 14924,
    semiAnnual: 7760.48,
    quarterly: 3954.86,
    monthly: 1492.40,
  },
  {
    name: 'Interment 2nd',
    contractPrice: 106600,
    spotCash: 95400,
    familySpotCash: 89800,
    annual: 21320,
    semiAnnual: 11086.40,
    quarterly: 5649.80,
    monthly: 2132.00,
  },
  {
    name: 'Cremains Interment 1st',
    contractPrice: 53300,
    spotCash: 47700,
    familySpotCash: 44900,
    annual: 10660,
    semiAnnual: 5543.20,
    quarterly: 2824.90,
    monthly: 1066.00,
  },
  {
    name: 'Cremains Interment 2nd',
    contractPrice: 63960,
    spotCash: 57240,
    familySpotCash: 53880,
    annual: 12792,
    semiAnnual: 6651.84,
    quarterly: 3389.88,
    monthly: 1279.20,
  },
]

export const comboPlans: ServicePlan[] = [
  {
    name: 'Cremation w/ Viewing Plus',
    contractPrice: 437060,
    spotCash: 368180,
    familySpotCash: 368180,
    annual: 78228,
    semiAnnual: 40678.56,
    quarterly: 20730.42,
    monthly: 7822.80,
  },
  {
    name: 'Regular Plus',
    contractPrice: 533000,
    spotCash: 449000,
    familySpotCash: 449000,
    annual: 95400,
    semiAnnual: 49608.00,
    quarterly: 25281.00,
    monthly: 9540.00,
  },
  {
    name: 'Premier Plus',
    contractPrice: 746200,
    spotCash: 628600,
    familySpotCash: 628600,
    annual: 133560,
    semiAnnual: 69451.20,
    quarterly: 35393.40,
    monthly: 13356.00,
  },
]

export const nacionalPlans: ServicePlan[] = [
  {
    name: 'Cremation',
    contractPrice: 74620,
    spotCash: 66780,
    familySpotCash: 62860,
    annual: 14924,
    semiAnnual: 7760.48,
    quarterly: 3954.86,
    monthly: 1492.40,
  },
  {
    name: 'Cremation with Viewing',
    contractPrice: 159900,
    spotCash: 143100,
    familySpotCash: 134700,
    annual: 31980,
    semiAnnual: 16629.60,
    quarterly: 8474.70,
    monthly: 3198.00,
  },
  {
    name: 'Viewing and Cremation',
    contractPrice: 175890,
    spotCash: 157410,
    familySpotCash: 148170,
    annual: 35178,
    semiAnnual: 18292.56,
    quarterly: 9322.17,
    monthly: 3517.80,
  },
  {
    name: 'Regular',
    contractPrice: 175890,
    spotCash: 157410,
    familySpotCash: 148170,
    annual: 35178,
    semiAnnual: 18292.56,
    quarterly: 9322.17,
    monthly: 3517.80,
  },
]
