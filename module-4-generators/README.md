* [Intro to Generator Functions Video](https://courses.edx.org/courses/course-v1:Microsoft+DEV234x+1T2018a/courseware/d04f016d4e65466e9c54a1e0a1fda1de/98c00e7b0f5b4898918caf8f11c6d3fc/?child=first)

## Text

Hello, in this video, I will be introducing the topic of generators,
and will be giving an overview on what will be covered in this module.
In short, generators are functions that can be paused and resumed.
In addition, generators can send output when pausing and
receive input when resuming.
Now the reason why generators are such a big deal and
why you should use them is because of how well
they work with asynchronous functions, such as fetch.
Imagine this.
You have a generator function, and
inside it you wanna make some asynchronous spec requests.
Now you can make the fetch call, pause the generator, wait for
the fetch response to process outside of the generator, and
then return the fetch fulfillment value back to the generator
before resuming it.
This allows for asynchronous code to be written inside the generator
synchronously, and that's what's amazing about generators.
In this module, I will be covering how to create a generator function,
how to pause and restart a generator by iterating through it, and
how to send output and receive inputs into a generator.
And lastly,
I'll show you how to use generators with asynchronous promises.
