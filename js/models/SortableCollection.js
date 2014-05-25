define([
  "Backbone"
], function(Backbone) {
  var defaultAttr = "id";
  function comparator(a, b) {
    // Assuming that the sortKey values can be compared with '>' and '<'
    a = a.get(this.sortKey);
    b = b.get(this.sortKey);
    return this.sortReverse
            ? b < a ? 1 : b > a ? -1 : 0 // reversed
            : a < b ? 1 : a > b ? -1 : 0; // regular
  };

  var SortableCollection = Backbone.Collection.extend({
    sortByAttr: function(attribute) {
      attribute = attribute || defaultAttr;
      this.sortReverse = attribute.substr(0, 1) === "-";
      this.sortKey = this.sortReverse ? attribute.substr(1) : attribute;
      this.comparator = comparator;
      this.sort();
    }
  })
  return SortableCollection;
});