<!-- Use external markdown resource, separate slides by three newlines; vertical slides by two newlines -->
## Let it Crash
----
### Designing Robust Systems

Note:
00:00 Freddy
- Marcus, Freddy
- Original title: 'Your stack is too damn complex - Let it crash with Elixir'
- Show you why letting 'it' crash might be a good thing.



<img src="img/robustness_air_quotes.jpg" class="r-stretch" />

Note:
01:00
- Show of hands: Who needs this?
- Sounds pretty unspecific, no?
- Let's zoom in



### A robust system
- runs despite errors
- performant despite errors
- treats users fairly
- Heisenbugs <!-- .element: class="fragment" data-fragment-index="1" -->
- self-healing <!-- .element: class="fragment" data-fragment-index="1" -->

Note:
01:20
- low support and operational costs



### Use cases
- High availability
- Start ups
- Simple tech stack

Note:
02:00
- start up: resources constraints, scalable
- simple tech stack: not language: infrastructure and ops



<img src="img/robustness-vs-dx.jpg" class="r-stretch" />
Note:
02:40



<img src="img/demo-time.jpg" class="r-stretch" />

<img src="img/hetzner-box.avif" class="r-stretch" />

bugs and high load 🐞

Note:
03:00
- <a target="_blank" href="https://console.hetzner.com/projects/11266407/servers/103367032/overview">Hetzner</a>
- <a target="_blank" href="https://ftes.de/owl">ftes.de/owl</a>
- walk through web UI
  - user facing input
  - load control: base load!



## What would You do?
<!-- qrencode -o img/qrcode-board.png https://dcon-elixir.ftes.de/board -->
<img src="img/qrcode-board.png" class="r-stretch" />

[ftes.de/owl](https://ftes.de/owl)
Note:
06:00 Marcus
- What building blocks would you need?
- Especially given the hardware constraints we've imposed
- 🌐 Show <a target="_blank" href="https://dcon-elixir.ftes.de/bulletin_board/buildingblocks">board 1</a>
- <a target="_blank" href="https://dcon-elixir.ftes.de/bulletin_board/buildingblocks/admin">admin view</a>



<img src="img/lets-break-the-system.jpg" class="r-stretch" />



### Observability
<img src="img/observability.jpg" class="r-stretch" />

Note:
09:00
- How can you find a 'misbehaving part of software' on PROD?
- Follow-Up: How do you partition software in your stack?



### What are Your tools?
<!-- qrencode -o img/qrcode-board.png https://dcon-elixir.ftes.de/board -->
<img src="img/qrcode-board.png" class="r-stretch" />

[ftes.de/owl](https://ftes.de/owl)
Note:
10:00
- 🌐 Show <a target="_blank" href="https://dcon-elixir.ftes.de/bulletin_board/observability">board 2</a>
- <a target="_blank" href="https://dcon-elixir.ftes.de/bulletin_board/observability/admin">admin view</a>



<img src="img/sheldon-hunts-bugs.jpg" class="r-stretch" />

Note:
Freddy
- keep your browser windows open!
- show errors in log
- trace
- performance bug: slow calc
- edge case: `13` bad input
- missing input validation: negative number -> infinite loop



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
