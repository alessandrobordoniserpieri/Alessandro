import { useState } from 'react'

function App() {
  const [file, setFile] = useState<File | null>(null)

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">
        Excel App
      </h1>
      <p className="text-gray-600 mb-4">
        Carica il tuo file Excel per iniziare.
      </p>
      <input
        type="file"
        accept=".xlsx,.xls,.csv"
        onChange={(e) => setFile(e.target.files?.[0] ?? null)}
        className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
      />
      {file && (
        <p className="mt-4 text-green-600">
          File selezionato: {file.name}
        </p>
      )}
    </div>
  )
}

export default App
