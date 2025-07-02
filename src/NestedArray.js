import React from 'react'

const NestedArray = () => {

    function flattenArray(arr){
        let stack = [...arr];
        let result = [];

        while(stack.length){
            let next = stack.pop();
            console.log(next)
            if(Array.isArray(next)){
                stack.push(...next)
            }else{
                result.unshift(next)
            }
        }
        return result
    }
    let output = flattenArray([1, [2, [3, 4], 5], 6])
    console.log(output)
  return (
    <div>NestedArray</div>
  )
}

export default NestedArray