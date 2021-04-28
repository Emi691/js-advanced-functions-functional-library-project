const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
     for(const property in collection) {
       callback(collection[property], property, collection)
     }
      return collection
    },

    map: function(collection, callback) {
      let newCollection = []
      for(const property in collection) {
        let newValue = callback(collection[property], property, collection)
        newCollection.push(newValue)
      }
       return newCollection
    },

    reduce: function(collection, callback, acc) {
      if(acc){
        for(const property in collection) {
          acc = callback(acc, collection[property], collection)
        }
      }else{
        acc = collection[0]
        for(let i = 1; i < collection.length; i++) {
          acc = callback(acc, collection[i], collection)
        }
      }
       return acc
    },

    find: function(collection, predicate) {
      let value
      for(const property in collection) {
        if(predicate(collection[property]) === true) {  
          value = collection[property] 
          break }
      }
      return value
    },

    filter: function(collection, predicate){
      let values = []
      for(const property in collection) {
        if(predicate(collection[property]) === true) {  
          values.push(collection[property]) 
        }
      }
      return values

    },

    size: function(collection){
      let length = 0
      for(const property in collection) {
        length += 1
      }
      return length
    },

    first: function(array, n){
      if(n){
        let values = []
        for(let i = 0; i < n; i++){
          values.push(array[i])
        }
        return values
      }else{
      return array[0]
      }
    },

    last: function(array, n){
      if(n){
        let values = []
        for(let i = (array.length - n); i < array.length; i++){
          values.push(array[i])
        }
        return values
      }else{
      return array[array.length - 1]
      }
    },

    compact: function(array){
      let compactArray = []
      for(const index in array) {
        if(!!array[index] === true){
          compactArray.push(array[index])
        }
      }
      return compactArray
    },

    sortBy: function(array, callback){
      let sorter = [] 
      let sorted = []
      for(const element of array){
        sorter.push(callback(element))
      }
      sorter.sort(function(a,b){return a - b})
      for (const value of sorter){
        sorted.push(array.find(element => callback(element) === value))
      }
      return sorted

    },

    flatten: function(array, shallow){
      let flattened = []
      function recursiveFlattener(array){
        for(const element of array){
          if(Array.isArray(element)){
            recursiveFlattener(element)
          }else{
            flattened.push(element)
          }
        }
      }
      if(shallow === true){
        for(const element of array){
          if(Array.isArray(element)){
          flattened = flattened.concat(element)
          }else{
          flattened.push(element)
          }
        }
      }else{
        recursiveFlattener(array)
      }
      return flattened
    },

    uniq: function(array, isSorted, callback) {
        let unique = []
        if(callback){
          for(const element of array){
            if(unique.length === 0 || !unique.find(value => callback(value) === callback(element))){
              unique.push(element)
            }
          }
        }else if(isSorted === true) {
          for(const index in array){
            if(array[index] !== array[parseInt(index) + 1]){
              unique.push(array[index])
            }
          }
          }else{
            for(const element of array){
              if(unique.length === 0 || !unique.find(value => value === element)){
                unique.push(element)
              }
            }
          }
      return unique
    },

    keys: function(object){
      let allKeys = []
      for(const key in object){
        allKeys.push(key)
      }
      return allKeys
    },
    
    values: function(object){
      let allValues = []
      for(const key in object){
        allValues.push(object[key])
      }
      return allValues
    },

    functions: function(object) {
      let allFuncs = []
      for(const key in object){
        if(typeof object[key] === 'function'){
          allFuncs.push(object[key])
        }
      }
      return allFuncs
    },

  }
})()

fi.libraryMethod()

