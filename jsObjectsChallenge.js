//Write a class Vec that represents a vector in two-dimensional space. It takes x and y parameters (numbers), which it should save to properties of the same name.

class Vec{
    constructor(x,y){
        this.x=x;
        this.y=y;
    }
    plus(other){
        return new Vec(this.x + other.x, this.y + other.y)
    }

    minus(other){
        return new Vec(other.x - other.x, this.y - other.y)
    }

    get length(){
        let l = Math.round((this.x**2 + this.y**2)**(1/2));
        return l
    }

}

console.log(new Vec(4,5).length)
let vec1 = new Vec(4,5);
console.log(vec1.plus(new Vec(4,4)))
console.log(vec1.minus(new Vec(12,9)))


// Write a class called Group (since Set is already taken). Like Set, it has add, delete, and has methods. Its constructor creates an empty group, add adds a value to the group (but only if it isn’t already a member), delete removes its argument from the group (if it was a member), and has returns a Boolean value indicating whether its argument is a member of the group.

class Group{
    constructor(members){
        this.members=members;
    }
    add(value){
        if(this.has(value)) return this;
        return new Group(this.members.concat([value]))
    }
    delete(value){
        if(!this.has(value)) return this;
        return new Group(this.members.filter(m=> m !==value))
    }
    has(value){
        return this.members.includes(value);
    }

}

Group.empty = new Group([]);
let a = Group.empty.add("a");
let ab = a.add("b");
let b = ab.delete("a");

console.log(b)

