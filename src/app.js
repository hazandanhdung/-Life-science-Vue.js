
    let vm = new Vue({
        el: '#app',
        data: {
            msg: "ok"
        },
        methods: {
            show() {
                console.log(hello);
            }
        },
        beforeCreate() {
            // The first life cycle function, which means that the instance will be executed before it is completely created.
            console.log(this.msg, this.show);//undefined undefined
            //Note: When the beforeCreate lifecycle function is executed,
            // The data in data and methods are still unused.
        },
        created() {
            // Second life cycle function
            //In created, both data and methods have been initialized.
            console.log(this.msg, this.show);//ok   ƒ show(){}
            // If you want to call the methods in the methods, or operate the data in the data, the earliest, can only be operated in created
        },
        //Template replacement
        beforeMount() {
            //This is the third lifecycle function, indicating that the template has been compiled in memory.
            // but the template has not been rendered to the page yet
            console.log(document.getElementById('h3').innerText);//{{msg}}
            // When the beforeMount is executed, the elements in the page have not been completely replaced.
            // just some template strings written before
        },
        mounted() {
            //This is the fourth lifecycle function I met, indicating that the template in memory,
            // It has been actually mounted on the page, and the user can already see the rendered page.
            console.log(document.getElementById('h3').innerText);//ok
            //Note: mounted is the last lifecycle function during instance creation.
            // When the completion of the installation means that the instance has been completely created, and if there is no other operation,
            // The instance is unchanged in memory
        },
        //Two events in the run
        beforeUpdate() {
            //This is the fifth life cycle function that I met, indicating that
            // Our interface has not been updated yet (but the data has been updated)
            //There is nothing when the data has not changed.

            // Data changes: ok -> hello
            console.log(document.getElementById('h3').innerText);//ok
            console.log(this.msg);//hello
            // conclude that when the beforeUpdate is executed, the data displayed on the page is still old.
            // At this time the data data is up to date, the page has not been synchronized with the latest data
        },
        updated() {
            //This is the sixth lifecycle function I met, indicating that the interface and data are updated.
            // Data changes: ok -> hello
            console.log(document.getElementById('h3').innerText);//hello
            console.log(this.msg);//hello
            // When the updated event is executed, the page and data data have been synchronized.
        },
        //destroy
        beforeDestroy() {
            console.log(this.msg);//no
            //This is the seventh life cycle function encountered, indicating that vue begins to enter the destruction phase from the run phase;
            //All data and all methods on the instance,
            //And the filter, the instruction... are all available. At this point, the process of destroying has not actually been performed.
        },
        destroyed() {
            console.log(this.msg);//no
            //This is the eighth lifecycle function I met, indicating that the component has been completely destroyed.
            //At this point, all data, methods, instructions, filters... are not available in the build.
        }
    })
}