Page({
    data: {
        icon_types: [
            'success',
            'success_no_circle',
            'info',
            'warn',
            'waiting',
            'cancel',
            'download',
            'search',
            'clear'
        ]
    },
    onLoad: function(options){
        this.data.title = options.title
    },
    onReady: function(){
        var title = this.data.title || "调试当前页"
        wx.setNavigationBarTitle( {
            title: title
        })
    }
})