export const getSelectedItem = (elementId) => {
    var elt = document.getElementById(elementId);

    if (elt.selectedIndex == -1)
        return null;

    return elt.options[elt.selectedIndex].text;
}


export function getObjectArray(objectEntries) {
    var entries = []; 

    var keys = Object.keys(objectEntries);

    for(var index in keys)
    {
        var entry = objectEntries[keys[index]];
        entries.push(entry);
    }

    return entries;
}
