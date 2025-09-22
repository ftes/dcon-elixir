<!-- Use external markdown resource, separate slides by three newlines; vertical slides by two newlines -->
## Let it Crash
----
### Designing Robust Systems

Note:
00:00 Freddy
Our names
Your stack is too damn complex - Let it crash with Elixir
Show you why letting 'it' crash might be a good thing.



<img src="img/robustness_air_quotes.jpg" class="r-stretch" />

Note:
01:00
- Who needs this anyways?
- Sounds pretty unspecific, no?
- Let's zoom in



### A robust system
- runs despite errors
- performant despite errors
- treats users fairly
---
- deals with "Heisenbugs"
- self-heals

Note:
01:20
- low support and operational costs



### Use cases
- High availability
- Simple tech stack
- Start ups

Note:
02:00
- simple tech stack: not language: infrastructure and ops
- start up: resources constraints, scalable



<img src="img/robustness-vs-dx.jpg" class="r-stretch" />
Note:
02:40



<img src="img/demo-time.jpg" class="r-stretch" />

<img src="img/hetzner-box.avif" class="r-stretch" />

bugs and high load 🐞

Note:
03:00
- walk through web UI
  - user facing input
  - dashboard with telemetry
  - load control: base load!
  - bulletin board?
TODO nav bar responsive, rm metrics



### How would
## you
### create such a system?

Note:
06:00 Marcus
- What building blocks would you need?
- Especially given the hardware constraints we've imposed
- 🌐 Show board



TODO Route QR Code to bulletin board
<img src="img/qrcode.png" class="r-stretch" />

[ftes.de/owl](https://ftes.de/owl)
Note:
06:20



<img src="img/lets-break-the-system.jpg" class="r-stretch" />



### Observability
<img src="img/observability.jpg" class="r-stretch" />

Note:
09:00
- How can you find a 'misbehaving part of software' on PROD?
- Follow-Up: How do you partition software in your stack?



### What are your tools?
Bulletin board
- TODO Bulletin board 2, QR Code?



<img src="img/sheldon-hunts-bugs.jpg" class="r-stretch" />

Note:
Freddy
- keep your browser windows open!
- show errors in log
- trace
- performance bug: slow calc
- edge case: `13` bad input
- missing input validation: negative number -> infinite loop

TODO prepare demo ON server (mix upgrade)



### Building Blocks
<img src="img/legos.jpg" class="r-stretch" />

### for Robustness

Note:
Marcus
ad lib
What primitives must the runtime provide to enable this?



<img src="img/lego-plate-threads-meme.jpg" class="r-stretch" />

Note:
- threads: lightweight, isolated, identity
- preemptive scheduling
- memory isolation & message passing
- threads have and identity -> introspection
- process supervision (via message system)
- scheduler: back pressure - sending message to busy process? throttle



## Supervision trees
<img src="img/lego-tree-2.avif" class="r-stretch" />



<img src="img/complecting-code-paths-spiderman.jpg" class="r-stretch" />



### Reducing Complexity
<img src="img/complect-tangled.jpg" class="r-stretch" />

Note:
Marcus
- complex -> to complect
- there are errors that are relevant to the user
- and errors that are irrelevant to the user
- Why do both types of errors need to be complected?



<img src="img/just-restart-part-of-system.jpg" class="r-stretch" />
<div style="display: flex; gap: 3rem; justify-content: center;">
  <h3 class="fragment">Let it crash</h3>
  <h3 class="fragment">...and heal itself</h3>
</div>

Note:
- fragility on the micro-scale often means robustness on the macro scale
- Supervision-tree:
  - restart subsystem that got affected by a non user-facing error



<img src="img/long-tail-of-benefits.jpg" class="r-stretch" />
Note:
Freddy
- assertions in code -> compact, crash if not in expected state
- it crashes loudly -> see it in logs
- back pressure - sending message to busy process? throttle
- Distributed as a default
  - Kubernetes, distributed caches, message queues
- SSR + WebSockets + DOM patching = No Problem
  - Phoenix + LiveView (Now in 1.1)



<img src="img/robustness-and-dx.jpg" class="r-stretch" />



<!-- .slide: data-background-image="img/bogengaudi.avif" class="orange" -->
## BogenGaudi

<div class="r-stretch"></div>

### Rent by 📦



<img src="img/feedback.avif" class="r-stretch" />

---

<div style="display: flex; justify-content: space-between;">
<div>

#### Marcus Autenrieth
[marcus@autenrieth.me](mailto:marcus@autenrieth.me)

</div>
<div>

#### Fredrik Teschke
[ftes.de](https://ftes.de)

</div>
</div>
