function Skills () {
    return (
        <div id='skills' className='container pt-32'>
            <div className='grid md:grid-cols-2 gap-20 items-center'>
                <div>
                    <h2 className='text-3xl md:text-2xl text-bold'>Technologies I work with</h2>
                    <p className='text-gray-200 pt-2'>
                    First, HTML sets up the structure of a small paragraph, placing it inside a container for easy styling. CSS styles this paragraph, adjusting colors, padding, and alignment to make it visually appealing and emphasizing certain keywords by changing their color and weight. Then, TypeScript adds interactivity by making the paragraph respond to user actions. For instance, if you click on the paragraph, the background color might change, adding a dynamic, engaging effect.   
                    </p>
                </div>
                <div>
                    <div className='grid grid-cols-2 text-accent text-3xl sm:text-4xl'>
                        <div className='space-y-4'>
                            <h2>Typescript</h2>
                            <h2>React.js</h2>
                            <h2>Next.js</h2>
                        </div>
                        <div className='space-y-4'>
                            <h2>Tailwind</h2>
                            <h2>CSS</h2>
                            <h2>Node.js</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Skills;