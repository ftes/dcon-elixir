<!-- Use external markdown resource, separate slides by three newlines; vertical slides by two newlines -->
## Let it Crash
----
### Designing Robust Systems



<img src="img/robustness_air_quotes.jpg" class="r-stretch" />

Note:
- Who needs this anyways?
- Sounds pretty unspecific, no?
- Let's zoom in



### A robust system
- keeps running despite errors
- runs performant despite errors
- treats users fairly w.r.t. load
- deals with "Heisenbugs"
- self-heals

Note:
- low support and operational costs



### Use cases
1. High availability
2. Simple tech stack
3. Start ups

Note:
- simple tech stack: not language: infrastructure and ops
- start up: resources constraints, scalable



<img src="img/robustness-vs-dx.jpg" class="r-stretch" />



<img src="img/demo-time.jpg" class="r-stretch" />

- small box
- always available
- bugs and high load 🐞

Note:
- walk through web UI
  - user facing input
  - dashboard with telemetry
  - load control
  - bulletin board?



### How would
## you
### create such a system?

TODO: Bulletin board?

Note:
- What building blocks would you need?
- Especially given the hardware constraints we've imposed



<img src="img/qrcode.png" class="r-stretch" />

<a href="https://ftes.de/owl">ftes.de/owl</a>



<img src="img/sheldon-hunts-bugs.jpg" class="r-stretch" />

Note:
- performance bug: slow calc
- edge case: `13` bad input
- missing input validation: negative number -> infinite loop



### Observability
<img src="img/observability.jpg" class="r-stretch" />

Note:
- How can you find a 'misbehaving part of software' on PROD?
- Follow-Up: How do you partition software in your stack?
- TODO: enable OS-Data in Dashboard
- TODO: secure dashboard behind phoenix basic auth



### Building Blocks
<img src="img/legos.jpg" class="r-stretch" />

### for Robustness

Note:
What primitives must the runtime provide to enable this?



<img src="img/lego-plate-threads-meme.jpg" class="r-stretch" />

Note:
- threads: lightweight, isolated, identity
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



<img src="img/long-tail-of-benefits.jpg" class="r-stretch" />
Note:
- Distributed as a default
  - Kubernetes, distributed caches, message queues
- SSR + WebSockets + DOM patching = No Problem
  - Phoenix + LiveView (Now in 1.1)



Time left? Dive into code.


<img src="img/robustness-and-dx.jpg" class="r-stretch" />
