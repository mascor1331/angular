'use strict';"use strict";
var segments_1 = require('./segments');
var lang_1 = require('angular2/src/facade/lang');
var collection_1 = require('angular2/src/facade/collection');
function link(segment, tree, change) {
    if (change.length === 0)
        return tree;
    var normalizedChange = (change.length === 1 && change[0] == "/") ? change : ["/"].concat(change);
    return new segments_1.Tree(_update(segments_1.rootNode(tree), normalizedChange));
}
exports.link = link;
function _update(node, changes) {
    var rest = changes.slice(1);
    var outlet = _outlet(changes);
    var segment = _segment(changes);
    if (lang_1.isString(segment) && segment[0] == "/")
        segment = segment.substring(1);
    // reach the end of the tree => create new tree nodes.
    if (lang_1.isBlank(node)) {
        var urlSegment = new segments_1.UrlSegment(segment, null, outlet);
        var children = rest.length === 0 ? [] : [_update(null, rest)];
        return new segments_1.TreeNode(urlSegment, children);
    }
    else if (outlet != node.value.outlet) {
        return node;
    }
    else {
        var urlSegment = lang_1.isStringMap(segment) ? new segments_1.UrlSegment(null, segment, null) :
            new segments_1.UrlSegment(segment, null, outlet);
        if (rest.length === 0) {
            return new segments_1.TreeNode(urlSegment, []);
        }
        return new segments_1.TreeNode(urlSegment, _updateMany(collection_1.ListWrapper.clone(node.children), rest));
    }
}
function _updateMany(nodes, changes) {
    var outlet = _outlet(changes);
    var nodesInRightOutlet = nodes.filter(function (c) { return c.value.outlet == outlet; });
    if (nodesInRightOutlet.length > 0) {
        var nodeRightOutlet = nodesInRightOutlet[0]; // there can be only one
        nodes[nodes.indexOf(nodeRightOutlet)] = _update(nodeRightOutlet, changes);
    }
    else {
        nodes.push(_update(null, changes));
    }
    return nodes;
}
function _segment(changes) {
    if (!lang_1.isString(changes[0]))
        return changes[0];
    var parts = changes[0].toString().split(":");
    return parts.length > 1 ? parts[1] : changes[0];
}
function _outlet(changes) {
    if (!lang_1.isString(changes[0]))
        return null;
    var parts = changes[0].toString().split(":");
    return parts.length > 1 ? parts[0] : null;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGluay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRpZmZpbmdfcGx1Z2luX3dyYXBwZXItb3V0cHV0X3BhdGgtaTJidlVKR1EudG1wL2FuZ3VsYXIyL3NyYy9hbHRfcm91dGVyL2xpbmsudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHlCQUFpRSxZQUFZLENBQUMsQ0FBQTtBQUM5RSxxQkFBNkMsMEJBQTBCLENBQUMsQ0FBQTtBQUN4RSwyQkFBMEIsZ0NBQWdDLENBQUMsQ0FBQTtBQUUzRCxjQUFxQixPQUFxQixFQUFFLElBQXNCLEVBQzdDLE1BQWE7SUFDaEMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUM7UUFBQyxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ3JDLElBQUksZ0JBQWdCLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxLQUFLLENBQUMsSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLEdBQUcsTUFBTSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2pHLE1BQU0sQ0FBQyxJQUFJLGVBQUksQ0FBYSxPQUFPLENBQUMsbUJBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7QUFDekUsQ0FBQztBQUxlLFlBQUksT0FLbkIsQ0FBQTtBQUVELGlCQUFpQixJQUEwQixFQUFFLE9BQWM7SUFDekQsSUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM1QixJQUFJLE1BQU0sR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDOUIsSUFBSSxPQUFPLEdBQUcsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2hDLEVBQUUsQ0FBQyxDQUFDLGVBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDO1FB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QzdCLEVBQUUsQ0FBQyxDQUFDLENBQUMsZUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztJQUN2QyxJQUFJLEtBQUssR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzdDLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO0FBQzVDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1RyZWUsIFRyZWVOb2RlLCBVcmxTZWdtZW50LCBSb3V0ZVNlZ21lbnQsIHJvb3ROb2RlfSBmcm9tICcuL3NlZ21lbnRzJztcbmltcG9ydCB7aXNCbGFuaywgaXNTdHJpbmcsIGlzU3RyaW5nTWFwfSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2xhbmcnO1xuaW1wb3J0IHtMaXN0V3JhcHBlcn0gZnJvbSAnYW5ndWxhcjIvc3JjL2ZhY2FkZS9jb2xsZWN0aW9uJztcblxuZXhwb3J0IGZ1bmN0aW9uIGxpbmsoc2VnbWVudDogUm91dGVTZWdtZW50LCB0cmVlOiBUcmVlPFVybFNlZ21lbnQ+LFxuICAgICAgICAgICAgICAgICAgICAgY2hhbmdlOiBhbnlbXSk6IFRyZWU8VXJsU2VnbWVudD4ge1xuICBpZiAoY2hhbmdlLmxlbmd0aCA9PT0gMCkgcmV0dXJuIHRyZWU7XG4gIGxldCBub3JtYWxpemVkQ2hhbmdlID0gKGNoYW5nZS5sZW5ndGggPT09IDEgJiYgY2hhbmdlWzBdID09IFwiL1wiKSA/IGNoYW5nZSA6IFtcIi9cIl0uY29uY2F0KGNoYW5nZSk7XG4gIHJldHVybiBuZXcgVHJlZTxVcmxTZWdtZW50PihfdXBkYXRlKHJvb3ROb2RlKHRyZWUpLCBub3JtYWxpemVkQ2hhbmdlKSk7XG59XG5cbmZ1bmN0aW9uIF91cGRhdGUobm9kZTogVHJlZU5vZGU8VXJsU2VnbWVudD4sIGNoYW5nZXM6IGFueVtdKTogVHJlZU5vZGU8VXJsU2VnbWVudD4ge1xuICBsZXQgcmVzdCA9IGNoYW5nZXMuc2xpY2UoMSk7XG4gIGxldCBvdXRsZXQgPSBfb3V0bGV0KGNoYW5nZXMpO1xuICBsZXQgc2VnbWVudCA9IF9zZWdtZW50KGNoYW5nZXMpO1xuICBpZiAoaXNTdHJpbmcoc2VnbWVudCkgJiYgc2VnbWVudFswXSA9PSBcIi9cIikgc2VnbWVudCA9IHNlZ21lbnQuc3Vic3RyaW5nKDEpO1xuXG4gIC8vIHJlYWNoIHRoZSBlbmQgb2YgdGhlIHRyZWUgPT4gY3JlYXRlIG5ldyB0cmVlIG5vZGVzLlxuICBpZiAoaXNCbGFuayhub2RlKSkge1xuICAgIGxldCB1cmxTZWdtZW50ID0gbmV3IFVybFNlZ21lbnQoc2VnbWVudCwgbnVsbCwgb3V0bGV0KTtcbiAgICBsZXQgY2hpbGRyZW4gPSByZXN0Lmxlbmd0aCA9PT0gMCA/IFtdIDogW191cGRhdGUobnVsbCwgcmVzdCldO1xuICAgIHJldHVybiBuZXcgVHJlZU5vZGU8VXJsU2VnbWVudD4odXJsU2VnbWVudCwgY2hpbGRyZW4pO1xuXG4gICAgLy8gZGlmZmVyZW50IG91dGxldCA9PiBwcmVzZXJ2ZSB0aGUgc3VidHJlZVxuICB9IGVsc2UgaWYgKG91dGxldCAhPSBub2RlLnZhbHVlLm91dGxldCkge1xuICAgIHJldHVybiBub2RlO1xuXG4gICAgLy8gc2FtZSBvdXRsZXQgPT4gbW9kaWZ5IHRoZSBzdWJ0cmVlXG4gIH0gZWxzZSB7XG4gICAgbGV0IHVybFNlZ21lbnQgPSBpc1N0cmluZ01hcChzZWdtZW50KSA/IG5ldyBVcmxTZWdtZW50KG51bGwsIHNlZ21lbnQsIG51bGwpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IFVybFNlZ21lbnQoc2VnbWVudCwgbnVsbCwgb3V0bGV0KTtcbiAgICBpZiAocmVzdC5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiBuZXcgVHJlZU5vZGU8VXJsU2VnbWVudD4odXJsU2VnbWVudCwgW10pO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgVHJlZU5vZGU8VXJsU2VnbWVudD4odXJsU2VnbWVudCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF91cGRhdGVNYW55KExpc3RXcmFwcGVyLmNsb25lKG5vZGUuY2hpbGRyZW4pLCByZXN0KSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gX3VwZGF0ZU1hbnkobm9kZXM6IFRyZWVOb2RlPFVybFNlZ21lbnQ+W10sIGNoYW5nZXM6IGFueVtdKTogVHJlZU5vZGU8VXJsU2VnbWVudD5bXSB7XG4gIGxldCBvdXRsZXQgPSBfb3V0bGV0KGNoYW5nZXMpO1xuICBsZXQgbm9kZXNJblJpZ2h0T3V0bGV0ID0gbm9kZXMuZmlsdGVyKGMgPT4gYy52YWx1ZS5vdXRsZXQgPT0gb3V0bGV0KTtcbiAgaWYgKG5vZGVzSW5SaWdodE91dGxldC5sZW5ndGggPiAwKSB7XG4gICAgbGV0IG5vZGVSaWdodE91dGxldCA9IG5vZGVzSW5SaWdodE91dGxldFswXTsgIC8vIHRoZXJlIGNhbiBiZSBvbmx5IG9uZVxuICAgIG5vZGVzW25vZGVzLmluZGV4T2Yobm9kZVJpZ2h0T3V0bGV0KV0gPSBfdXBkYXRlKG5vZGVSaWdodE91dGxldCwgY2hhbmdlcyk7XG4gIH0gZWxzZSB7XG4gICAgbm9kZXMucHVzaChfdXBkYXRlKG51bGwsIGNoYW5nZXMpKTtcbiAgfVxuXG4gIHJldHVybiBub2Rlcztcbn1cblxuZnVuY3Rpb24gX3NlZ21lbnQoY2hhbmdlczogYW55W10pOiBhbnkge1xuICBpZiAoIWlzU3RyaW5nKGNoYW5nZXNbMF0pKSByZXR1cm4gY2hhbmdlc1swXTtcbiAgbGV0IHBhcnRzID0gY2hhbmdlc1swXS50b1N0cmluZygpLnNwbGl0KFwiOlwiKTtcbiAgcmV0dXJuIHBhcnRzLmxlbmd0aCA+IDEgPyBwYXJ0c1sxXSA6IGNoYW5nZXNbMF07XG59XG5cbmZ1bmN0aW9uIF9vdXRsZXQoY2hhbmdlczogYW55W10pOiBzdHJpbmcge1xuICBpZiAoIWlzU3RyaW5nKGNoYW5nZXNbMF0pKSByZXR1cm4gbnVsbDtcbiAgbGV0IHBhcnRzID0gY2hhbmdlc1swXS50b1N0cmluZygpLnNwbGl0KFwiOlwiKTtcbiAgcmV0dXJuIHBhcnRzLmxlbmd0aCA+IDEgPyBwYXJ0c1swXSA6IG51bGw7XG59XG4iXX0=