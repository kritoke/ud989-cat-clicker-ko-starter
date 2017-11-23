var Cat = function(data) {
    this.clickCount = ko.observable(data.clickCount);
    this.name = ko.observable(data.name);
    this.imgSrc = ko.observable(data.imgSrc);
    this.imgAttribution = ko.observable(data.imgAttribution);
    this.nicknames = ko.observableArray(data.nicknames);

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

    this.currentCat = ko.observable(new Cat({
        clickCount: 0,
        name: 'Tabby',
        imgSrc: 'img/434164568_fea0ad4013_z.jpg',
        imgAttribution: 'http://www.flicker.com/photos/bigtallguy/434164568',
        nicknames: ['Tabtab', 'T-Bone', 'Mr. T', 'Tabitha Tab Tabby Catty Cat']
    }));

    this.incrementCounter = function() {
        this.clickCount(this.clickCount() + 1);
    };

}

ko.applyBindings(new ViewModel());