<!-- Use external markdown resource, separate slides by three newlines; vertical slides by two newlines -->
## Let it Crash
----
## Designing Robust Systems



<img src="img/robustness_air_quotes.jpg" class="r-stretch" />

Note:
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


<img src="img/robustness-vs-dx.jpg" class="r-stretch" />



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



<img src="img/sheldon-hunts-bugs.jpg" class="r-stretch" />

Note:
- edge case: slow calc
- edge case: error
- edge case: infinite loop



### Observability
<img src="img/observability.jpg" class="r-stretch" />

Note:
- How can you find a 'misbehaving part of software' on PROD?
- Follow-Up: How do you partition software in your stack?



### DevOps hat on 👷‍♀️
- shell & std lib only
<!-- second display / vertical split: always keep dashboard visible? -->
- hot code update via scp



### The Building Blocks for Robustness
What primitives must the runtime provide to enable this?


### The Building Blocks for Robustness
lightweight, isolated threads
- preemptive scheduling
- memory isolation & message passing
- threads have and identity -> introspection
- process supervision (via message system)



### Reducing Complexity
<img src="img/complecting-code-paths-spiderman.jpg" class="r-stretch" />

Note:
- complex -> to complect
- there are errors that are relevant to the user
- and errors that are irrelevant to the user
- Why do both types of errors need to be complected?



### Let it crash and heal itself
<img src="img/just-restart-part-of-system.jpg" class="r-stretch" />

Note:
- fragility on the micro-scale often means robustness on the macro scale
- Supervision-tree:
  - restart subsystem that got affected by a non user-facing error



### The long tail of benefits
- Distributed as a default
  - Kubernetes, distributed caches, message queues
- SSR + WebSockets + DOM patching = No Problem
  - Phoenix + LiveView (Now in 1.1)



<img src="img/robustness-and-dx.jpg" class="r-stretch" />
