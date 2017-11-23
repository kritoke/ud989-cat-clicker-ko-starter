var Cat = function() {
    this.clickCount = ko.observable(0);
    this.name = ko.observable('Tabby');
    this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
    this.imgAttribution = ko.observable('http://www.flicker.com');
    this.nicknames = ko.observableArray([
        { name: 'Bob' },
        { name: 'George' }
    ]);

    this.catLevel = ko.computed(function() {
        var levelName = '';
        var counts = this.clickCount();
        switch (true) {
            case (counts <= 10):
                levelName = 'Newborn';
                break;
            case (counts <= 20):
                levelName = 'Infant';
                break;
            case counts <= 50:
                levelName = 'Teen';
                break;
            default:
                levelName = 'Adult';
        }
        return levelName;
    }, this);
}

var ViewModel = function() {

    this.currentCat = ko.observable(new Cat());

    this.incrementCounter = function() {
        this.currentCat().clickCount(this.currentCat().clickCount() + 1);
    };

}

ko.applyBindings(new ViewModel());