// Shared functions for Tampermonkey scripts
// version 0.1
// 2024-02-04
// Copyright (c) 2024, Yun Huang, huangyunict@gmail.com
// Released under the GPL license
// http://www.gnu.org/copyleft/gpl.html
// --------------------------------------------------------------------

//  Evaluate XPath and return a list of elements.
function evalXPath(docNode, xpath) {
    var results = [];
    var elem;
    var nodesSnapshot = document.evaluate(xpath, docNode, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);
    for (var i=0; i<nodesSnapshot.snapshotLength; i++) {
        elem = nodesSnapshot.snapshotItem(i);
        results.push(elem);
    }
    return results;
}

