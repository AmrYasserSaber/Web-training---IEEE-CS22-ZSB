function createSelectBox(startYear, endYear) {
    document.write(`<selct>`)
    for (let i = startYear; i <= endYear; i++) {
        document.write(`<option value="${i}">`)
        document.write(i)
        document.write(`</option>`)
    }
    document.write(`</selct>`)
    }
createSelectBox(2000, 2021);