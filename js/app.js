var initialCats = [{
        name: 'Tabby',
        image: 'img/434164568_fea0ad4013_z.jpg',
        clickCount: 0,
        imgAttribution: 'http://www.flicker.com/photos/bigtallguy/434164568',
        nicknames: ['Tabtab', 'T-Bone', 'Mr. T', 'Tabitha Tab Tabby Catty Cat']
    },
    {
        name: 'Tiger',
        image: 'img/4154543904_6e2428c421_z.jpg',
        imgAttribution: 'https://www.flicker.com/photos/xshamx/4154543904',
        clickCount: 0,
        nicknames: ['Tigger']
    },
    {
        name: 'Scaredy',
        image: 'img/22252709_010df3379e_z.jpg',
        clickCount: 0,
        imgAttribution: 'https://www.flicker.com/photos/kpjas/22252709',
        nicknames: ['Casper']
    },
    {
        name: 'Shadow',
        image: 'img/1413379559_412a540d29_z.jpg',
        clickCount: 0,
        imgAttribution: 'https://www.flicker.com/photos/malfet/1413379559',
        nicknames: ['Shooby']
    },
    {
        name: 'Sleepy',
        image: 'img/9648464288_2516b35537_z.jpg',
        clickCount: 0,
        imgAttribution: 'https://www.flicker.com/photos/onesharp/9648464288',
        nicknames: ['Zzzzz']
    }
]

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
    var self = this;

    this.catList = ko.observableArray([]);

    initialCats.forEach(function(catItem) {
        self.catList.push(new Cat(catItem));
    });

    this.currentCat = ko.observable(this.catList()[0]);

    this.incrementCounter = function() {
        self.currentCat().clickCount(self.currentCat().clickCount() + 1);
    };

}

ko.applyBindings(new ViewModel());