import React, { useState } from 'react'

const fetcher = (url: string) => fetch(url).then((r) => r.json())

export default function navbar() {
      

  return (
    <section>
      <h2>RESTful</h2>
      <div className="grid md:grid-cols-3  gap-4 grid-cols-none">
        <ul>
          {APIS.map((i) => (
            <li key={i}>
              <a
                href={i}
                className={`${api === i ? '' : 'text-slate-400'}`}
                onClick={(e) => update(i, e)}
              >
                {i}
              </a>
            </li>
          ))}
        </ul>
        <pre className="md:col-span-2 overflow-scroll h-80 text-xs m-0">
          {result}
        </pre>
      </div>
    </section>
  )
}
