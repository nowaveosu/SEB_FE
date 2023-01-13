let counter1 = {
    value: 0,
    increase: function(){
        this.value++
    },
    decrease: function(){
        this.value--
    },
    getValue: function(){
        return this.value
    }
}