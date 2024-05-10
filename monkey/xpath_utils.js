//  Shared classes / methods for Violentmonkey scripts, which may or may not be used in Greasemonkey / Tampermonkey scripts.
//  version 0.1
//  2024-02-04
//  Copyright (c) 2024, Yun Huang, huangyunict@gmail.com
//  Released under the GPL license:  http://www.gnu.org/copyleft/gpl.html
//  Reference to this script: https://raw.githubusercontent.com/huangyunict/public_host/main/monkey/xpath_utils.js
// --------------------------------------------------------------------

/**
 * Utilities for Xpath processing.
 */
class XpathUtils {
  /**
   * Evaluate XPath and return a list of elements.
   *
   * @param {string} xpath The XPath to query.
   * @param {Node} contextNode The context node.
   * @return {array} List of matched elements.
   */
  static evalXpath(xpath, contextNode = document) {
    console.debug("Enter evalXpath: xpath=%s, contextNode=%s", xpath, contextNode);
    const results = [];
    if (contextNode === undefined || contextNode === null) {
      return results;
    }
    const nodesSnapshot = document.evaluate(xpath, contextNode, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
    for (let i=0; i<nodesSnapshot.snapshotLength; i++) {
      results.push(nodesSnapshot.snapshotItem(i));
    }
    console.debug("Leave evalXpath: results.length=%s, xpath=%s, contextNode=%s", results.length, xpath, contextNode);
    return results;
  }

  /**
   * Util function to get the XPath predicate string given a class name.
   *
   * @param {string} className The class name.
   */
  static getClassPredicate(className) {
    return `contains(concat(" ", normalize-space(@class), " "), " ${className.trim()} ")`
  }

  /**
   * Util function to get the contains Xpath predicate string given a text to match.
   *
   * @param {string} text The text to match.
   */
  static getTextPredicate(text) {
    return `text()[contains(.,'${text}')]`;
  }
}

