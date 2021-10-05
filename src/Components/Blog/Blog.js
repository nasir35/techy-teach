import React from 'react';
import useServices from '../../Hooks/useServices';

const Blog = () => {
    const [courses] = useServices();
    return (
        <div>
            <section className="p-12">
                <h2 className="text-3xl w-2/12 mx-auto pb-2 text-center border-b-4 border-red-500 font-bold">Blogs</h2>
                <div className="my-4 mt-8 p-3 border-2 border-gray-800">
                    <div className="inline-block w-3/12">
                        <img src="https://www.thecodecrypt.com/images/2020/01/08/js.png" alt="" />
                    </div>
                    <div className="inline-block w-9/12">
                        <h2 className="text-2xl font-medium mb-5">Why Javascript is an interpreted language?</h2>
                        <p className="">In general, JavaScript is categorized as a dynamic or interpreted language. There are lots of misunderstandings about this fact. We need to ask and find the answers of, Is it entirely fair to say, JavaScript is an Interpreted Language? What is the difference between an Interpreter and a Compiler? An interpreter is a computer program that directly executes instructions written in a programming or scripting language without requiring them previously to have been compiled into a machine language program. It translates one Statement at a time. Whereas, A compiler is computer software that transforms computer code written in one programming language (the source language, like JavaScript, etc.) into another programming language (the target language, like machine code).The first thing to understand, Computer doesn't understand the programming languages directly. Every programming language got its own syntax, grammar, and structure. No matter what programming languages(JavaScript, Python, Java, etc.) are writing the code with, it has to be translated into something that the machine(Computer) understands. The most important fact here is, how does the JavaScript source code go through the journey of becoming a machine-understandable language? JavaScript Engine performs many of the steps(in fact, more cleaner and sophisticated ways) that a typical Compiler would perform in compiling source code.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blog;