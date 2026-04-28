export interface CSVExportOptions {
  excludeKeys?: string[]
  customHeaders?: Record<string, string>
}

export const exportToCSV = <T extends Record<string, unknown>>(
  data: T[],
  filename: string,
  options: CSVExportOptions = {}
): void => {
  if (!data || data.length === 0) {
    console.warn("No data to download")
    return
  }

  const { excludeKeys = [], customHeaders = {} } = options

  const columnNames: string[] = []
  data.forEach((item) => {
    Object.keys(item).forEach((key) => {
      if (!columnNames.includes(key) && !excludeKeys.includes(key)) {
        columnNames.push(key)
      }
    })
  })

  const headers = columnNames.map((col) => customHeaders[col] || col)

  const rowsData: string[] = []
  data.forEach((row: Record<string, unknown>) => {
    const rowData: string[] = []
    columnNames.forEach((columnName: string) => {
      const value = String(row[columnName] ?? "")
      const escapedValue =
        value.includes(",") || value.includes('"') || value.includes("\n")
          ? `"${value.replace(/"/g, '""')}"`
          : value
      rowData.push(escapedValue)
    })
    rowsData.push(rowData.join(","))
  })

  const csvContent = headers.join(",") + "\n" + rowsData.join("\n")

  const element = document.createElement("a")
  element.setAttribute(
    "href",
    "data:text/csv;charset=utf-8," + encodeURIComponent(csvContent)
  )
  element.setAttribute("download", `${filename}.csv`)
  element.style.display = "none"
  document.body.appendChild(element)
  element.click()
  document.body.removeChild(element)
}
