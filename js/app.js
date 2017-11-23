var ViewModel = function() {
    this.clickCount = ko.observable(0);
    this.name = ko.observable('Tabby');
    this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
    this.imgAttribution = ko.observable('http://www.flicker.com');

    this.incrementCounter = function() {
        this.clickCount(this.clickCount() + 1);
    };

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

ko.applyBindings(new ViewModel());