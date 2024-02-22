//  Shared functions for Tampermonkey scripts
//  version 0.1
//  2024-02-04
//  Copyright (c) 2024, Yun Huang, huangyunict@gmail.com
//  Released under the GPL license:  http://www.gnu.org/copyleft/gpl.html
//  Reference to this script: https://raw.githubusercontent.com/huangyunict/public_host/main/tampermonkey/common.js
// --------------------------------------------------------------------

/**
 * Evaluate XPath and return a list of elements.
 *
 * @param {string} xpath The XPath to query.
 * @param {Node} contextNode The context node.
 */
function evalXpath(xpath, contextNode = document) {
    console.log("Enter evalXpath: xpath=%s, contextNode=%s", xpath, contextNode);
    const results = [];
    const nodesSnapshot = document.evaluate(xpath, contextNode, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
    for (let i=0; i<nodesSnapshot.snapshotLength; i++) {
        let elem = nodesSnapshot.snapshotItem(i);
        results.push(elem);
    }
    console.log("Leave evalXpath: results.length=%s, xpath=%s, contextNode=%s", results.length, xpath, contextNode);
    return results;
}

/**
 * Util function to get the XPath string given a element name and a class name.
 *
 * @param {string} elemName The element name.
 * @param {string} className The class name.
 */
function getClassXpath(elemName, className) {
    return `${elemName}[contains(concat(" ", normalize-space(@class), " "), " ${className.trim()} ")]`
}

