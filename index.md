<!-- Use external markdown resource, separate slides by three newlines; vertical slides by two newlines -->
## Let it Crash
----
## Designing Robust Systems



### Robust System
- Who needs this anyways?
- Sounds pretty unspecific, no?
- Let's zoom in



### A robust system
- keeps running despite errors happening
- runs performant despite errors happening
- treats users fair w.r.t. load
- deals with "Heisenbugs"
- self-heals

Note:
- low support and operational costs



### Use cases
1. High availability
2. Simple tech stack
3. Start ups (resource constraints, build fast + scalable)

Note:
- simple tech stack: not language: infrastructure and ops



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



### Is our Demo System robust?
- Let us monitor it's behaviour
- Let us monitor it's interactions with the HW
- While we are trying to break it
- TODO: enable OS-Data in Dashboard
- TODO: secure dashboard behind phoenix basic auth



### The Bugs 🐛
- edge case: slow calc
- edge case: error
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
- ...


### The Building Blocks for Robustness
lightweight, isolated threads
- preemptive scheduling
- memory isolation & message passing
- threads have and identity -> introspection
- process supervision (via message system)



### Reducing Complexity
- complex -> to complect
- there are errors that are relevant to the user
- and errors that are irrelevant to the user
- Why do both types of errors need to be complected?



### Let it crash and heal itself
- fragility on the micro-scale often means robustness on the macro scale
- Supervision-tree:
  - restart subsystem that got affected by a non user-facing error



### The long tail of benefits
- Distributed as a default
  - Kubernetes, distributed caches, message queues
- SSR + WebSockets + DOM patching = No Problem
  - Phoenix + LiveView (Now in 1.1)
