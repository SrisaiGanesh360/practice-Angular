Custom Pipe
===========
1. create a pipe file (remaining.pipe.ts)
2. create a class that class should implement PipeTransform Interface
   decorate that class with @Pipe decorator
3. override transform() method and write own logic
4. register that pipe in module(app.module.ts)
5. add to the declarations:[] in module 
6. use the pipe in HTML file
   {{"I am a student" | remaining}}