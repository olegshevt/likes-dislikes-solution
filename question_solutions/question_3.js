function academicNotes(objectNotes) {
    let data = 0;
    if (Object.keys(objectNotes).length === 0 || Array.isArray(objectNotes)) {
        return false;
    } else if (Object.keys(objectNotes) < 0 || Object.keys(objectNotes) > 5) {
        return false;
    }
    for (var item in objectNotes) {
        data += parseFloat(objectNotes[item]) / 100;
    }
    return data;
}
academicNotes({ 6: 10 })