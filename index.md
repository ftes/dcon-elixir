<!-- Use external markdown resource, separate slides by three newlines; vertical slides by two newlines -->
# Designing Robust Systems



### Robust System
- Sounds pretty unspecific, no?
- Let's zoom in



### A robust system
- keeps running despite errors happening
- runs performant despite errors happening
- treats users fair w.r.t. load
- deals with "Heisenbugs"
- keeps support costs low
- keeps operational costs low
- self-heals



### Use cases
1. High availability
2. Start ups (resource constraints, build fast + scalable)



### System Constraints
- small box
- always available
- expect load peaks



### System Demo

http://ftes.de/owl

<img src="img/qrcode.png" class="r-stretch" />




### How would You create such a system?
- What building blocks would you need?
    - Especially given the hardware constraints we've imposed
- TODO: note/idea-sharing app (self built?)




### Is our Demo System robust?
- Let us monitor it's behaviour
- Let us monitor it's interactions with the HW
- While we are trying to break it




### The Bugs 🐛
- edge case: error
- edge case: slow calc
- edge case: infinite loop




### Observability
- How can you find a 'misbehaving part of software' on PROD?
- Follow-Up: How do you partition software in your stack?




### DevOps hat on 👷‍♀️
- shell & std lib only
<!-- second display / vertical split: always keep dashboard visible? -->
- hot code update via scp




### The Building Blocks for Robustness
- what primitives must the runtime provide to enable this?
- preemptive scheduling
- introspection
- fault isolation
- (distribution)



### The Stack 📚
BEAM trivia + basic architecture

<pre class="mermaid r-stretch">
sequenceDiagram
    create participant c1
    main->>c1: spawn
    create participant c2
    main->>c2: spawn
    main->>c1: {:increment, main}
    main->>c2: :crash
    destroy c2
    main--xc2: crashed
    c1->>main: {:count, 2}
</pre>



### The table 🍽️
|                | Stack A | Stack B|
|----------------|---------|--------|
| web server     |         | |
| cache          | Redis   | |
| µ-service comm | RabbitMQ | |
| deployment     | Kubnernetes | |
| observability (distributed traces) |      | |
| UI | SPA + GraphQL API | |
