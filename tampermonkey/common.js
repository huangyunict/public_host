//  Shared functions for Tampermonkey scripts
//  version 0.1
//  2024-02-04
//  Copyright (c) 2024, Yun Huang, huangyunict@gmail.com
//  Released under the GPL license:  http://www.gnu.org/copyleft/gpl.html
//  Reference to this script: https://raw.githubusercontent.com/huangyunict/public_host/main/tampermonkey/common.js
// --------------------------------------------------------------------

//  Evaluate XPath and return a list of elements.
function evalXpath(xpath) {
    console.log("Enter evalXpath: xpath=%s", xpath);
    var results = [];
    var elem;
    var nodesSnapshot = document.evaluate(xpath, document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
    for (var i=0; i<nodesSnapshot.snapshotLength; i++) {
        elem = nodesSnapshot.snapshotItem(i);
        results.push(elem);
    }
    console.log("Leave evalXpath: results.length=%s, xpath=%s", results.length, xpath);
    return results;
}

