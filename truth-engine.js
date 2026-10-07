var Truth = (() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
  var truth_engine_exports = {};
  __export(truth_engine_exports, {
    APPLY_LABEL: () => APPLY_LABEL,
    EDGES: () => EDGES,
    EXAMPLES: () => EXAMPLES,
    GATES: () => GATES,
    RUNGS: () => RUNGS,
    SIDS: () => SIDS,
    STANDARD_META: () => STANDARD_META,
    analyze: () => analyze
  });
  const SIDS = [
    "probabilistic",
    "deterministic",
    "empirical",
    "objective",
    "verifiable",
    "provable"
  ];
  const STANDARD_META = [
    {
      id: "probabilistic",
      name: "Probabilistic",
      question: "Is the right answer a degree, a frequency, or a chance?"
    },
    {
      id: "deterministic",
      name: "Deterministic",
      question: "Do the stated conditions fix a single outcome?"
    },
    {
      id: "empirical",
      name: "Empirical",
      question: "Can observation move the standing of the claim?"
    },
    {
      id: "objective",
      name: "Objective",
      question: "Can competent observers using one method agree?"
    },
    {
      id: "verifiable",
      name: "Verifiable",
      question: "Is there a finite check someone else can rerun?"
    },
    {
      id: "provable",
      name: "Provable",
      question: "Is there a derivation from premises the parties share?"
    }
  ];
  const APPLY_LABEL = {
    yes: "Yes",
    partial: "In part",
    no: "No"
  };
  const RUNGS = [
    "Intake",
    "Proposition",
    "Scope",
    "Method",
    "Evidence",
    "Challenge",
    "Convergence",
    "Settled"
  ];
  const GATES = [
    {
      id: "topic",
      title: "Any topic",
      kicker: "raw words",
      rule: "A topic names a subject. It has no truth-value until it becomes a proposition."
    },
    {
      id: "claim",
      title: "State a claim",
      kicker: "one sentence",
      rule: "Rewrite the topic as a sentence that can hold or fail. Questions become propositions. Bare nouns wait here."
    },
    {
      id: "apt",
      title: "Truth-apt?",
      kicker: "can it hold?",
      rule: "Commands, cheers, and bare preferences do not hold or fail. They are recast, or replaced with a sentence that can."
    },
    {
      id: "reframe",
      title: "Recast",
      kicker: "not a proposition",
      rule: "The sentence is set aside as a truth-bearer. A nearby proposition \u2014 a report, a description, an ought \u2014 can re-enter at the start."
    },
    {
      id: "scope",
      title: "Fix the scope",
      kicker: "conditions",
      rule: "Name the population, the time, the place, and the conditions. An unscoped sentence is several claims wearing one coat."
    },
    {
      id: "domain",
      title: "Kind of reality",
      kicker: "which rules",
      rule: "Formal reality is settled inside rules. Empirical reality is settled by observation. Normative reality is settled only with a value premise. Subjective reality is settled as a report about a subject. A mixture is split until each piece has one kind."
    },
    {
      id: "formal",
      title: "Formal",
      kicker: "inside rules",
      rule: "The claim lives in a system of axioms and inference rules. Observation can illustrate it. The decision procedure is a derivation."
    },
    {
      id: "shared",
      title: "Shared axioms",
      kicker: "one system",
      rule: "The parties accept the same rules. A finite derivation can then close the claim, for it or against it."
    },
    {
      id: "proven",
      title: "Proof",
      kicker: "derivation",
      rule: "A finite derivation from the shared rules closes the claim. A calculation that fails closes it as a refutation. An expression the rules leave undefined is closed as undefined."
    },
    {
      id: "disputed",
      title: "Conditional",
      kicker: "axioms differ",
      rule: "When the axioms are not shared, a derivation shows what holds inside a named system. The result stays tied to that system."
    },
    {
      id: "independent",
      title: "Undecidable",
      kicker: "both consistent",
      rule: "When a claim and its negation are both consistent with the system, the system has finished. Extra axioms can create a conditional answer inside a larger system."
    },
    {
      id: "empirical",
      title: "Empirical",
      kicker: "by observation",
      rule: "The claim is about the world. Something that can be observed is what raises or lowers its standing."
    },
    {
      id: "operate",
      title: "Measurable?",
      kicker: "a procedure",
      rule: "Specify an observation that would count for the claim and one that would count against it. Without that pair, the procedure stops."
    },
    {
      id: "blocked",
      title: "No method",
      kicker: "procedure stops",
      rule: "No public observation is named, and no shared formal system is named. The stop is a result about method. It is not a finding that the claim is false."
    },
    {
      id: "check",
      title: "Public check",
      kicker: "shared method",
      rule: "A method that competent observers can rerun is what can make the claim objective. The walk then asks whether that check is independent, and whether it can be seen."
    },
    {
      id: "independence",
      title: "Independent?",
      kicker: "not a copy",
      rule: "Copies of one account do not raise confidence. A second telling of the same source is still one source. The cell moves when a check is independent of the account already in hand."
    },
    {
      id: "corrupt",
      title: "Corrupt?",
      kicker: "the file itself",
      rule: "Ask whether the gathered information was altered, destroyed, fabricated, or withheld. An accusation stays contested until independent traces agree. When they agree, the corruption is clear, and the action begins."
    },
    {
      id: "action",
      title: "Action",
      kicker: "toward justice",
      rule: "Clear corruption strikes that source from the claim it was used to carry. The opposite story is not proved by the loss. The action is to preserve what remains, rebuild the claim from checks that are still clean, and open the ledger on the tampering: oversight, and a charge where the tampering is a crime."
    },
    {
      id: "visible",
      title: "Can it be seen?",
      kicker: "justice",
      rule: "An independent check has to be publishable and answerable. Where a contradiction cannot count, and a report cannot be told from a copy, the walk parks. The missing piece is named justice. The claim is unseen. It is not marked false."
    },
    {
      id: "unseen",
      title: "Unseen",
      kicker: "no standing",
      rule: "The method may exist and the write-up may circulate. Without a place for the check to be published and answered, the ledger has no entry. Memory of the claim can be everywhere."
    },
    {
      id: "followed",
      title: "What followed?",
      kicker: "consequence ledger",
      rule: "Resolving what the record can establish about an event is one finish. Whether an accountable consequence entered the record is another. Arrest, charge, hearing, verdict, oversight, and a published report each walk alone. An empty cell stays \u201Cnot established in this record,\u201D and it names the filing or report that would move it. A corroborated arrest does not close this walk."
    },
    {
      id: "stable",
      title: "Lawlike",
      kicker: "fixed conditions",
      rule: "Under stated conditions the claim asserts one regime. A measurement verifies it. A single contrary case refutes a universal. The result stays empirical."
    },
    {
      id: "noisy",
      title: "Probable",
      kicker: "a degree",
      rule: "The honest answer is a frequency, a chance, or a credence. The engine estimates it, names the uncertainty, and scores it when the outcome arrives."
    },
    {
      id: "singular",
      title: "Singular",
      kicker: "one past event",
      rule: "A particular event is not rerun. Independent traces corroborate it or conflict. The standing is a credence grounded in those traces."
    },
    {
      id: "normative",
      title: "Normative",
      kicker: "an ought",
      rule: "The claim says what should be. Factual parts can be split off and sent through the empirical branch. The ought stays with its value premise."
    },
    {
      id: "values",
      title: "Value premise",
      kicker: "conditional",
      rule: "Name the value and whose it is. What follows from it can be checked. The value itself is the condition of the result, not a measurement."
    },
    {
      id: "subjective",
      title: "Subjective",
      kicker: "a subject",
      rule: "The sentence tracks a person\u2019s response. The objective-sounding superlative is recast as a report about that person, a time, and a set of alternatives."
    },
    {
      id: "report",
      title: "First person",
      kicker: "a report",
      rule: "\u201CP prefers S to each member of A at time T\u201D can be checked by testimony and choice. The unscoped sentence \u201CS is the best\u201D has no further procedure."
    },
    {
      id: "mixed",
      title: "Mixed",
      kicker: "several claims",
      rule: "The topic asserts more than one kind of reality. Each kind has its own final state, so the engine separates them before it continues."
    },
    {
      id: "split",
      title: "Decompose",
      kicker: "then re-enter",
      rule: "Each child claim returns to \u201CState a claim\u201D and walks alone. The parent is settled only when each child has reached its own final state."
    }
  ];
  const GATE_BY_ID = Object.fromEntries(GATES.map((g) => [g.id, g]));
  const EDGES = [
    ["topic", "claim"],
    ["claim", "apt"],
    ["apt", "reframe"],
    ["apt", "scope"],
    ["scope", "domain"],
    ["domain", "formal"],
    ["domain", "empirical"],
    ["domain", "normative"],
    ["domain", "subjective"],
    ["domain", "mixed"],
    ["formal", "shared"],
    ["formal", "disputed"],
    ["formal", "independent"],
    ["shared", "proven"],
    ["empirical", "operate"],
    ["operate", "blocked"],
    ["operate", "check"],
    ["check", "independence"],
    ["independence", "corrupt"],
    ["corrupt", "action"],
    ["corrupt", "visible"],
    ["action", "followed"],
    ["visible", "unseen"],
    ["visible", "stable"],
    ["visible", "noisy"],
    ["visible", "singular"],
    ["singular", "followed"],
    ["normative", "values"],
    ["subjective", "report"],
    ["mixed", "split"]
  ].map(([from, to]) => ({ from, to }));
  const SPINE = ["topic", "claim", "apt", "scope", "domain"];
  const EXAMPLES = [
    { label: "Consciousness", topic: "Consciousness" },
    { label: "Shut the door", topic: "Shut the door" },
    { label: "2 + 2 = 4", topic: "2 + 2 = 4" },
    { label: "2 + 2 = 5", topic: "2 + 2 = 5" },
    { label: "Is 97 prime?", topic: "Is 97 prime?" },
    { label: "Parallel postulate", topic: "The parallel postulate is true" },
    { label: "Continuum hypothesis", topic: "Continuum hypothesis" },
    { label: "Boiling point", topic: "Water boils at 100\xB0C" },
    { label: "The Earth is round", topic: "The Earth is round" },
    { label: "All swans are white", topic: "All swans are white" },
    { label: "Smoking and cancer", topic: "Smoking raises the risk of lung cancer" },
    { label: "Rain tomorrow", topic: "Rain tomorrow" },
    { label: "The Rubicon", topic: "Caesar crossed the Rubicon" },
    { label: "Reduce suffering", topic: "We ought to reduce suffering" },
    { label: "Best song", topic: "Best song ever" },
    {
      label: "Ban smoking",
      topic: "We should ban smoking because it causes cancer"
    },
    { label: "Does God exist?", topic: "Does God exist?" },
    { label: "Is coffee healthy?", topic: "Is coffee healthy?" },
    { label: "What followed", topic: "What consequence does the public record show has followed?" },
    { label: "Corrupt record", topic: "The gathered footage was destroyed and the official account rests on it." }
  ];
  function idle(note) {
    return {
      probabilistic: { applies: "no", note },
      deterministic: { applies: "no", note },
      empirical: { applies: "no", note },
      objective: { applies: "no", note },
      verifiable: { applies: "no", note },
      provable: { applies: "no", note }
    };
  }
  function standards(over, idleNote) {
    return { ...idle(idleNote), ...over };
  }
  function traces(specific) {
    return {
      topic: "Raw words enter. They do not yet have a truth-value.",
      claim: "The engine commits to one proposition.",
      apt: "The proposition can hold or fail.",
      scope: "Population, time, and conditions are fixed as far as the words allow.",
      domain: "The kind of reality chooses which standards can move the claim, and which final state is legal.",
      independence: "Copies of one account stay one source. Confidence waits for a check independent of it.",
      corrupt: "Nothing shown here was altered, destroyed, fabricated, or withheld. A clean independent source still counts.",
      visible: "The check can be published and answered, so the walk continues.",
      ...specific
    };
  }
  function make(partial) {
    return {
      assumptions: partial.assumptions ?? [],
      ...partial,
      terminalId: partial.path[partial.path.length - 1]
    };
  }
  function spine(...rest) {
    return [...SPINE, ...rest];
  }
  function capitalize(s) {
    return s.length ? s.charAt(0).toUpperCase() + s.slice(1) : s;
  }
  function cleaned(input) {
    return input.trim().replace(/\s+/g, " ").replace(/[.?!]+$/g, "").trim();
  }
  function norm(input) {
    return cleaned(input).toLowerCase();
  }
  function opSymbol(op) {
    if (op === "*") return "\xD7";
    if (op === "x" || op === "\xD7") return "\xD7";
    if (op === "/") return "\xF7";
    if (op === "-") return "\u2212";
    return "+";
  }
  function formalStandards(kind) {
    const proved = kind === "holds" || kind === "fails";
    return standards(
      {
        probabilistic: {
          applies: "no",
          note: "The rules fix a result or withhold one. A probability would describe a different claim."
        },
        deterministic: {
          applies: "yes",
          note: kind === "undefined" ? "The rules of arithmetic assign this expression no value." : "The operation and the integers determine one value."
        },
        empirical: {
          applies: "no",
          note: "A counting story can illustrate the sentence. The decision is the calculation."
        },
        objective: {
          applies: "yes",
          note: "Anyone who shares ordinary integer arithmetic reaches the same result."
        },
        verifiable: {
          applies: "yes",
          note: "The check is a finite calculation another person can repeat."
        },
        provable: {
          applies: proved ? "yes" : kind === "open" ? "partial" : "yes",
          note: kind === "holds" ? "The calculation is a proof in ordinary integer arithmetic." : kind === "fails" ? "The calculation is a proof of the negation." : kind === "undefined" ? "The definition of division is a proof that the expression has no value." : "The claim is on the proof track. The derivation is not written yet."
        }
      },
      "Idle."
    );
  }
  function arithmetic(input) {
    let s = cleaned(input).replace(/^(what is|what's|calculate|compute)\s+/i, "");
    const m = s.match(/^(-?\d+)\s*([+*/×x-])\s*(-?\d+)\s*(?:=\s*(-?\d+))?$/);
    if (!m) return null;
    if (m[1].replace("-", "").length > 12 || m[3].replace("-", "").length > 12) {
      return parkedFormal(
        s,
        "The integers are too large for an exact in-canvas calculation."
      );
    }
    const a = Number(m[1]);
    const b = Number(m[3]);
    const rhs = m[4] == null ? null : Number(m[4]);
    if (![a, b, rhs ?? 0].every(Number.isSafeInteger)) {
      return parkedFormal(s, "The integers are outside exact safe arithmetic.");
    }
    const op = m[2];
    const sym = opSymbol(op);
    const shown = `${a} ${sym} ${b}`;
    if (op === "/" && b === 0) {
      return make({
        claim: `${shown} is undefined in ordinary arithmetic.`,
        domain: "Formal",
        status: "Undefined",
        phase: "closed",
        warrant: 7,
        ceiling: "Settled by the definition of division. There is no number to find.",
        next: "The procedure is closed. A defined claim needs a non-zero divisor, or a different number system that states how it treats division by zero.",
        detail: "Division by zero has no value in ordinary arithmetic. The engine treats that as a finished formal decision, not as an unsolved sum.",
        path: spine("formal", "shared", "proven"),
        standards: formalStandards("undefined"),
        trace: traces({
          claim: `Read as a claim about the value of ${shown}.`,
          scope: "Ordinary integer arithmetic.",
          domain: "The expression is formal.",
          formal: "Only the rules of arithmetic are in play.",
          shared: "Ordinary arithmetic is the shared system.",
          proven: "Those rules assign the expression no value. The decision is final inside them."
        })
      });
    }
    if (op === "/") {
      const q = Math.trunc(a / b);
      const r = a - q * b;
      if (r !== 0) {
        const fact = `${a} = ${q} \xD7 ${b} + ${r}`;
        const asserted = rhs != null;
        return make({
          claim: asserted ? `${shown} = ${rhs} is false in the integers.` : `${shown} leaves quotient ${q} and remainder ${r}.`,
          domain: "Formal",
          status: asserted ? "Refuted" : "Proven",
          phase: "closed",
          warrant: 7,
          ceiling: "Settled in the integers by quotient and remainder.",
          next: asserted ? `The procedure is closed. ${fact}, so the asserted equality fails.` : `The procedure is closed. ${fact}.`,
          detail: `${fact}. Exact division does not yield an integer.`,
          path: spine("formal", "shared", "proven"),
          standards: formalStandards(asserted ? "fails" : "holds"),
          trace: traces({
            claim: `Read as integer arithmetic on ${shown}.`,
            scope: "The integers, exact division.",
            formal: "A finite division decides it.",
            shared: "Ordinary integer arithmetic is the shared system.",
            proven: fact + "."
          })
        });
      }
    }
    let value;
    if (op === "+") value = a + b;
    else if (op === "-") value = a - b;
    else if (op === "*" || op === "x" || op === "\xD7") value = a * b;
    else value = a / b;
    if (!Number.isSafeInteger(value)) {
      return parkedFormal(shown, "The result is outside exact safe integer arithmetic.");
    }
    const holds = rhs == null || rhs === value;
    return make({
      claim: holds ? `${shown} = ${value}.` : `${shown} = ${rhs} is false; the value is ${value}.`,
      domain: "Formal",
      status: holds ? "Proven" : "Refuted",
      phase: "closed",
      warrant: 7,
      ceiling: "Settled by a finite calculation in ordinary integer arithmetic.",
      next: holds ? "The procedure is closed. The calculation is the proof." : `The procedure is closed. ${shown} evaluates to ${value}, so the asserted equality is refuted.`,
      detail: holds ? `${shown} evaluates to ${value}. In ordinary integer arithmetic that evaluation is a proof.` : `${shown} evaluates to ${value}. The sentence that names ${rhs} is refuted by the same calculation.`,
      path: spine("formal", "shared", "proven"),
      standards: formalStandards(holds ? "holds" : "fails"),
      trace: traces({
        claim: rhs == null ? `Completed to an equality: ${shown} = ${value}.` : `Testing ${shown} = ${rhs}.`,
        scope: "Ordinary integer arithmetic.",
        formal: "The claim is an arithmetic identity.",
        shared: "The rules of integer arithmetic are shared.",
        proven: holds ? `${shown} evaluates to ${value}.` : `${shown} evaluates to ${value}, not ${rhs}.`
      })
    });
  }
  function parkedFormal(expr, why) {
    return make({
      claim: expr.endsWith(".") ? expr : `${expr}.`,
      domain: "Formal",
      status: "Open",
      phase: "parked",
      warrant: 3,
      ceiling: "A proof in a named formal system, once a derivation is written.",
      next: `${why} Name the system and write a finite derivation, or break the expression into integers the engine can calculate.`,
      detail: why,
      path: spine("formal", "shared"),
      standards: formalStandards("open"),
      trace: traces({
        formal: "The sentence is formal.",
        shared: "The system is ordinary arithmetic, and the derivation is not finished in this canvas."
      })
    });
  }
  function primality(input) {
    const s = cleaned(input);
    const m = s.match(/^(?:is\s+)?(\d+)\s+(?:a\s+)?prime$/i) || s.match(/^(\d+)\s+is\s+(?:a\s+)?prime$/i);
    if (!m) return null;
    if (m[1].length > 7) {
      return parkedFormal(
        `${m[1]} is prime`,
        "The integer is too large for trial division inside this canvas."
      );
    }
    const n = Number(m[1]);
    const witness = primeWitness(n);
    const claim = witness.prime ? `${n} is prime.` : `${n} is not prime.`;
    return make({
      claim,
      domain: "Formal",
      status: witness.prime ? "Proven" : "Refuted",
      phase: "closed",
      warrant: 7,
      ceiling: "Settled by a finite divisibility check. That check is a proof for this integer.",
      next: witness.prime ? "The procedure is closed. The failed search for a divisor is the proof." : "The procedure is closed. The factor is a disproof of primality.",
      detail: witness.detail,
      path: spine("formal", "shared", "proven"),
      standards: formalStandards(witness.prime ? "holds" : "fails"),
      trace: traces({
        claim: `Read as the proposition \u201C${n} is prime.\u201D`,
        scope: "The ordinary integers, prime meaning an integer greater than 1 with no divisor other than 1 and itself.",
        formal: "Primality of a fixed integer is a finite check.",
        shared: "The definition of prime is the shared rule.",
        proven: witness.detail
      })
    });
  }
  function primeWitness(n) {
    if (!Number.isInteger(n) || n <= 1) {
      return {
        prime: false,
        detail: `${n} is not prime. A prime is an integer greater than 1.`
      };
    }
    if (n === 2 || n === 3) {
      return {
        prime: true,
        detail: `${n} is prime. No integer d with 1 < d < ${n} exists to test.`
      };
    }
    if (n % 2 === 0) {
      return { prime: false, detail: `${n} = 2 \xD7 ${n / 2}.` };
    }
    const limit = Math.floor(Math.sqrt(n));
    for (let i = 3; i <= limit; i += 2) {
      if (n % i === 0) {
        return { prime: false, detail: `${n} = ${i} \xD7 ${n / i}.` };
      }
    }
    return {
      prime: true,
      detail: `Odd integers from 3 through ${limit} were tested. ${limit} is the greatest integer whose square does not exceed ${n}. None divides ${n}.`
    };
  }
  function smoking() {
    return make({
      claim: "Among humans, cigarette smoking raises the probability of lung cancer.",
      domain: "Empirical",
      status: "Established",
      phase: "arrived",
      warrant: 6,
      ceiling: "An established causal probability. The settled rung stays empty because a new identification strategy could still reopen it.",
      next: "The final form is a raised probability, replicated across study designs. A further move is a design that could overturn the causal identification. A deductive proof is not available for this claim, and the engine does not pretend to one.",
      detail: "The engine reads the topic as a claim about incidence, not about any one smoker\u2019s fate. Dose-response, cessation, and biological mechanism converge on that incidence claim. This canvas does not re-analyze the studies. It places the claim at the ceiling empirical probability can reach.",
      assumptions: [
        "\u201CRisk\u201D is read as incidence in human populations, not as certainty for a named person."
      ],
      path: spine("empirical", "operate", "check", "independence", "corrupt", "visible", "noisy"),
      standards: standards(
        {
          probabilistic: {
            applies: "yes",
            note: "The claim is about a raised chance. An individual outcome stays unsettled by the population result."
          },
          deterministic: {
            applies: "no",
            note: "No closed set of conditions fixes whether a particular smoker develops cancer."
          },
          empirical: {
            applies: "yes",
            note: "Cohorts, case-control studies, and cessation evidence are what the claim rests on."
          },
          objective: {
            applies: "yes",
            note: "Incidence is a public measurement. Observers who share the endpoint can agree on the counts."
          },
          verifiable: {
            applies: "yes",
            note: "The study designs can be repeated, and the endpoint can be audited."
          },
          provable: {
            applies: "no",
            note: "Finite observations can establish the causal probability. They do not deduct it from axioms."
          }
        },
        "Idle."
      ),
      trace: traces({
        claim: "Rewritten as a claim about human incidence, not about a single life.",
        scope: "Humans, cigarette smoking, lung cancer incidence.",
        empirical: "Observation is the instrument that can move it.",
        operate: "Incidence, dose, and cessation are measurable.",
        check: "Independent study designs are a public check.",
        noisy: "The settled form is a raised probability on which those designs converge."
      })
    });
  }
  function banSmoking() {
    return make({
      claim: "The sentence mixes an empirical claim, that smoking causes cancer, with a policy claim, that smoking should be banned.",
      domain: "Mixed",
      status: "Open",
      phase: "parked",
      warrant: 2,
      ceiling: "Two finals: the causal child can be established as a probability; the ban stays conditional on a named value and a jurisdiction.",
      next: "Split them. Run \u201Csmoking raises the incidence of lung cancer\u201D on the probability branch \u2014 that child is already in established form. Keep \u201Cwe should ban smoking\u201D on the value branch until the value premise and the jurisdiction are named.",
      detail: "The engine refuses to give the compound a single status. A causal fact and a policy decision finish in different places. The parent moves only by producing both children and walking each one.",
      assumptions: [
        "\u201CBecause\u201D is read as joining a causal claim to a policy claim, not as a proof of the policy."
      ],
      path: spine("mixed", "split"),
      standards: standards(
        {
          probabilistic: {
            applies: "partial",
            note: "The causal child is a probability. The ban is not."
          },
          empirical: {
            applies: "partial",
            note: "The causal child is empirical. The ought is not settled by the same observations."
          },
          objective: {
            applies: "partial",
            note: "Incidence is objective. The decision to ban also depends on a value."
          },
          verifiable: {
            applies: "partial",
            note: "The causal child has a public check. The value premise does not."
          }
        },
        "This standard applies to a child claim after the split, not to the compound as a whole."
      ),
      trace: traces({
        claim: "Held as two propositions joined by \u201Cbecause.\u201D",
        scope: "The compound is not yet a single scoped claim.",
        mixed: "One child is about the world. One child is about what should be done.",
        split: "Child A, incidence of cancer, goes to the probability branch and can arrive as established. Child B, the ban, goes to the value branch and stays conditional."
      })
    });
  }
  function rain() {
    return make({
      claim: "Rain will fall in a named place during a named interval.",
      domain: "Empirical",
      status: "Open",
      phase: "parked",
      warrant: 3,
      ceiling: "A probability, scored against a gauge when the interval ends.",
      next: "Name the place, the threshold (for example 0.2 mm), and the clock interval. Issue a probability. When the interval ends, score it against the gauge.",
      detail: "A forecast is already in its right form when it is a probability. Certainty is the wrong final state for a chaotic atmosphere. The engine parks until the place and the interval exist, because without them there is nothing to score.",
      assumptions: [
        "\u201CTomorrow\u201D is read as the next local day. No place and no rain threshold are in the topic."
      ],
      path: spine("empirical", "operate", "check", "independence", "corrupt", "visible", "noisy"),
      standards: standards(
        {
          probabilistic: {
            applies: "yes",
            note: "The usable product is a chance of crossing a rain threshold."
          },
          deterministic: {
            applies: "no",
            note: "An ensemble of atmospheric states does not fix one future in the form the claim needs."
          },
          empirical: {
            applies: "yes",
            note: "A gauge reading at the end of the interval is the observation."
          },
          objective: {
            applies: "yes",
            note: "A stated threshold at a stated place is a public event."
          },
          verifiable: {
            applies: "partial",
            note: "The check becomes available when the interval closes. It cannot be run early."
          },
          provable: {
            applies: "no",
            note: "A forecast is scored. It is not derived from axioms."
          }
        },
        "Idle."
      ),
      trace: traces({
        claim: "Held as a future weather proposition with its parameters still open.",
        scope: "Place, threshold, and interval are the missing scope.",
        empirical: "The gauge is the empirical instrument.",
        operate: "The procedure exists once the three parameters are filled in.",
        check: "The check is public and delayed until the interval ends.",
        noisy: "Parked on the probability branch, waiting for a number and a later score."
      })
    });
  }
  function song() {
    return make({
      claim: "Some song is, without qualification, the best song.",
      domain: "Subjective",
      status: "Reframed",
      phase: "parked",
      warrant: 2,
      ceiling: "A checkable preference report. The unscoped superlative has no further truth procedure.",
      next: "Name the listener, the time, and the set of alternatives. \u201CP prefers S to each member of A at time T\u201D can be checked by consistent choice and by testimony.",
      detail: "The engine treats the superlative as a response by a subject. Surveys can count such responses. They measure the reports. They do not manufacture an observer-independent ranking.",
      path: spine("subjective", "report"),
      standards: standards(
        {
          empirical: {
            applies: "partial",
            note: "Choice and testimony are observable. They record a person\u2019s response."
          },
          objective: {
            applies: "no",
            note: "The ranking, as stated, moves with the listener."
          },
          verifiable: {
            applies: "partial",
            note: "A named person\u2019s preference can be checked. The bare superlative cannot."
          }
        },
        "This standard waits on a restated report about a named subject."
      ),
      trace: traces({
        claim: "The superlative is stated so its missing subject becomes visible.",
        scope: "Listener, time, and alternative set are unfixed.",
        domain: "The reality in play is a subject\u2019s response.",
        subjective: "The sentence tracks a listener.",
        report: "Parked until it is a report about a person, a time, and a set."
      })
    });
  }
  function boiling() {
    return make({
      claim: "At one standard atmosphere, pure water boils at approximately 100\xB0C.",
      domain: "Empirical",
      status: "Established",
      phase: "arrived",
      warrant: 6,
      ceiling: "A lawlike empirical regularity inside a stated tolerance. An exact identity with 100.000\xB0C is a different, tighter claim.",
      next: "State pressure, purity, and tolerance. Inside half a degree under ordinary laboratory conditions, the claim is in its final form. A thermometer can verify it again.",
      detail: "Historically, 100\xB0C was fixed by the boiling point of water, which made the sentence true by the definition of the scale. On the modern kelvin definition, pure water at one standard atmosphere boils near 99.97\xB0C. The engine therefore keeps \u201C100\xB0C\u201D as the established practical statement and leaves an exact identity to measurement.",
      assumptions: [
        "The topic is read at one standard atmosphere, for water that is pure enough for an ordinary boiling-point trial."
      ],
      path: spine("empirical", "operate", "check", "independence", "corrupt", "visible", "stable"),
      standards: standards(
        {
          probabilistic: {
            applies: "partial",
            note: "Measurement error is a spread. The claim itself names one regime, not a chance."
          },
          deterministic: {
            applies: "yes",
            note: "Pressure, purity, and the definition of boiling fix the regime the sentence is about."
          },
          empirical: {
            applies: "yes",
            note: "A thermometer and a barometer are what correct or confirm the number."
          },
          objective: {
            applies: "yes",
            note: "The trial does not depend on who boils the water."
          },
          verifiable: {
            applies: "yes",
            note: "The trial is a finite public procedure."
          },
          provable: {
            applies: "no",
            note: "Thermodynamic arguments still use measured constants. The relation is established by the trial."
          }
        },
        "Idle."
      ),
      trace: traces({
        claim: "Tightened from a slogan to a claim with pressure and a tolerance.",
        scope: "Pure water, one standard atmosphere, boiling in the ordinary laboratory sense.",
        empirical: "The number is answerable to a thermometer.",
        operate: "Pressure, purity, and the onset of boiling are the procedure.",
        check: "Any equipped lab can rerun it.",
        stable: "Arrived. The practical regularity is the final form. An exact 100.000\xB0C identity is a further, stricter claim."
      })
    });
  }
  function swans() {
    return make({
      claim: "All swans are white.",
      domain: "Empirical",
      status: "Refuted",
      phase: "closed",
      warrant: 7,
      ceiling: "Closed by a contrary instance. One black swan ends the universal.",
      next: "The procedure is closed. A universal empirical claim ends when a single genuine counterinstance is in hand. Black swans are that instance.",
      detail: "The quantifier \u201Call\u201D makes the claim lawlike and brittle. Confirmation by further white swans would have left it open. Cygnus atratus closes it. The closure is an observation, and it is final for this universal.",
      path: spine("empirical", "operate", "check", "independence", "corrupt", "visible", "stable"),
      standards: standards(
        {
          probabilistic: {
            applies: "no",
            note: "Once the counterexample is admitted, the universal is false. It is not merely unlikely."
          },
          deterministic: {
            applies: "yes",
            note: "The universal quantifier fixes the logical shape: one contrary case breaks it."
          },
          empirical: {
            applies: "yes",
            note: "The color of a swan is an observation."
          },
          objective: {
            applies: "yes",
            note: "Plumage is a public property."
          },
          verifiable: {
            applies: "yes",
            note: "A bird can be inspected, and the species can be identified."
          },
          provable: {
            applies: "no",
            note: "The refutation is an observation of a counterinstance, not a derivation from axioms."
          }
        },
        "Idle."
      ),
      trace: traces({
        claim: "Kept as a universal.",
        scope: "Every swan, no region excluded.",
        empirical: "Color is observable.",
        operate: "A single non-white swan is a sufficient contrary observation.",
        check: "Species and plumage can be checked in public.",
        stable: "Closed. Black swans refute the universal."
      })
    });
  }
  function continuum() {
    return make({
      claim: "The continuum hypothesis is true.",
      domain: "Formal",
      status: "Undecidable",
      phase: "closed",
      warrant: 7,
      ceiling: "Settled as independent of ZFC. G\xF6del showed ZFC stays consistent if the hypothesis is added. Cohen showed ZFC stays consistent if the negation is added.",
      next: "Inside ZFC the procedure is closed. A further answer requires an extra axiom, and the result is then conditional on that axiom.",
      detail: "The engine separates two sentences. \u201CThe continuum hypothesis is true\u201D has no proof and no refutation in ZFC. \u201CThe continuum hypothesis is independent of ZFC\u201D is a theorem. The topic asks the first sentence. Its final state is undecidability in the standard system.",
      assumptions: [
        "The ambient system is ZFC, the default set theory in which the hypothesis is usually asked."
      ],
      path: spine("formal", "independent"),
      standards: standards(
        {
          deterministic: {
            applies: "partial",
            note: "ZFC does not fix a truth-value. A stronger axiom system can."
          },
          objective: {
            applies: "yes",
            note: "Independence is a fact about a named formal system, not about a preference."
          },
          verifiable: {
            applies: "partial",
            note: "The independence proofs can be checked. A blind search for a ZFC proof will not settle the question."
          },
          provable: {
            applies: "partial",
            note: "The hypothesis is not provable in ZFC. Its independence from ZFC is provable."
          }
        },
        "This standard does not move the hypothesis inside ZFC."
      ),
      trace: traces({
        claim: "Read as \u201Cthe continuum hypothesis is true,\u201D not as the independence theorem.",
        scope: "Zermelo\u2013Fraenkel set theory with choice.",
        formal: "The claim is internal to a formal system.",
        independent: "Both the hypothesis and its negation are consistent with ZFC, by G\xF6del (1938) and Cohen (1963). The system has finished."
      })
    });
  }
  function parallel() {
    return make({
      claim: "The parallel postulate is true.",
      domain: "Formal",
      status: "Conditional",
      phase: "arrived",
      warrant: 6,
      ceiling: "Truth inside a named geometry. Euclidean geometry includes the postulate. Hyperbolic geometry replaces it with its negation.",
      next: "Pick a geometry. Consequences inside the chosen system then walk the proof branch. There is no geometry-free proof of the postulate.",
      detail: "In Playfair\u2019s form, the postulate says that through a point not on a line there is exactly one parallel. Euclidean geometry takes this as an axiom, so inside that system it holds by the rules. Hyperbolic geometry adopts a contrary axiom, and models of that geometry show the resulting system is coherent. The final state of the bare question is conditional.",
      assumptions: [
        "\u201CThe parallel postulate\u201D is read in Playfair\u2019s form."
      ],
      path: spine("formal", "disputed"),
      standards: standards(
        {
          deterministic: {
            applies: "partial",
            note: "Each geometry fixes the answer. No geometry-free reading does."
          },
          empirical: {
            applies: "partial",
            note: "Measurement can suggest which geometry fits a physical region. The postulate itself is an axiom."
          },
          objective: {
            applies: "yes",
            note: "Inside a named geometry the answer does not depend on a preference."
          },
          verifiable: {
            applies: "partial",
            note: "Once the geometry is named, consequences have derivations that can be checked."
          },
          provable: {
            applies: "partial",
            note: "It is an axiom of Euclidean geometry, and its negation is an axiom of hyperbolic geometry. Neither is proved from nothing."
          }
        },
        "Idle until a geometry is named."
      ),
      trace: traces({
        claim: "Kept as a bare assertion of truth, so the missing geometry stays visible.",
        scope: "No geometry has been named yet.",
        formal: "The postulate is a rule of a geometric system.",
        disputed: "Arrived at the conditional: true in Euclidean geometry, replaced in hyperbolic geometry."
      })
    });
  }
  function ought() {
    return make({
      claim: "We ought to reduce suffering.",
      domain: "Normative",
      status: "Conditional",
      phase: "parked",
      warrant: 2,
      ceiling: "A conditional: given a named value, particular actions can be recommended, and their effects can be measured.",
      next: "Name whose duty this is and which suffering counts. Split off empirical children \u2014 which actions reduce which harms \u2014 and send those children through the empirical branch. The ought remains the condition.",
      detail: "The engine can test whether an action reduces a stated harm. It can also test whether a conclusion follows from a stated value. The value \u201Csuffering ought to be reduced\u201D is the premise those tests hang from.",
      assumptions: ["\u201CWe\u201D is unscoped: no agent and no class of suffering is named."],
      path: spine("normative", "values"),
      standards: standards(
        {
          empirical: {
            applies: "partial",
            note: "Which acts reduce which harms is empirical, once those acts and harms are named."
          },
          objective: {
            applies: "partial",
            note: "Observers can agree on what follows from a stated value. Agreement on the value is a further question."
          },
          verifiable: {
            applies: "partial",
            note: "The inference from a stated value can be checked. The value is not verified by an instrument."
          }
        },
        "An ought is not settled by this standard alone."
      ),
      trace: traces({
        claim: "Kept as an ought.",
        scope: "The agent and the class of suffering are still open.",
        normative: "The claim prescribes. It does not describe a measurement.",
        values: "Parked on the value premise until the agent and the harm are named."
      })
    });
  }
  function caesar() {
    return make({
      claim: "In 49 BCE Julius Caesar led an army across the Rubicon.",
      domain: "Empirical",
      status: "Corroborated",
      phase: "parked",
      warrant: 5,
      ceiling: "A singular past event, held on independent narrative traces. A local audit of the sources can still move it.",
      next: "Compare independent sources, fix the dating against the Roman calendar, and separate the crossing itself from the later literary life of the phrase.",
      detail: "A past event is objective and empirical, and it is settled by traces rather than by a rerun. Ancient sources agree on a crossing at the start of the civil war. This canvas does not inspect the manuscripts, so the claim stays on the trace branch short of that audit.",
      assumptions: [
        "The Rubicon is the river traditionally identified with Caesar\u2019s crossing into Italy in 49 BCE."
      ],
      path: spine("empirical", "operate", "check", "independence", "corrupt", "visible", "singular"),
      standards: standards(
        {
          probabilistic: {
            applies: "yes",
            note: "The event is held with a credence grounded in traces, not with necessity."
          },
          empirical: {
            applies: "yes",
            note: "Texts and the archaeological setting are the observations."
          },
          objective: {
            applies: "yes",
            note: "Whether the army crossed does not depend on a modern preference."
          },
          verifiable: {
            applies: "partial",
            note: "Sources can be checked against each other. The crossing cannot be rerun."
          },
          provable: {
            applies: "no",
            note: "Traces corroborate a singular event. They do not derive it."
          }
        },
        "Idle."
      ),
      trace: traces({
        claim: "Stated as one dated event.",
        scope: "49 BCE, Caesar, an army, the Rubicon.",
        empirical: "The evidence is what remains of the event.",
        operate: "Source comparison is the procedure.",
        check: "The sources are public. The event is not repeatable.",
        singular: "Parked at corroborated. The canvas has not re-audited the manuscripts."
      })
    });
  }
  function god() {
    return make({
      claim: "God exists.",
      domain: "Empirical",
      status: "Stopped",
      phase: "parked",
      warrant: 3,
      ceiling: "A stop under a public-observation standard. A named theological axiom system would move the claim onto the conditional branch instead.",
      next: "Supply an observation that would count for the claim and one that would count against it, or name an axiom system and a derivation inside it. Until one of those exists, the procedure stays stopped.",
      detail: "The sentence has the form of a claim about what exists. Under a standard that requires a public check, no agreed observation settles it, and under a formal standard no shared axioms are on the table. The engine records a stop. A stop is a result about the available methods.",
      assumptions: [
        "Routed under a public-observation standard. A theological system with its own axioms would leave this branch and re-enter at Conditional."
      ],
      path: spine("empirical", "operate", "blocked"),
      standards: standards(
        {
          empirical: {
            applies: "partial",
            note: "The sentence is about what exists, which would be empirical if a public observation were specified."
          },
          objective: {
            applies: "partial",
            note: "As a claim about existence it is objective in form. No shared method gives it a result."
          },
          verifiable: {
            applies: "no",
            note: "A verification procedure is the missing piece."
          },
          provable: {
            applies: "no",
            note: "No shared axiom system is named from which a derivation could start."
          }
        },
        "Idle until a method is named."
      ),
      trace: traces({
        claim: "Read as the existence claim.",
        scope: "No definition of God and no observation protocol is in the topic.",
        empirical: "Tried first under a public-observation standard.",
        operate: "No observation is specified that would count either way.",
        blocked: "Stopped. The stop records the missing method."
      })
    });
  }
  function coffee() {
    return make({
      claim: "Coffee is healthy.",
      domain: "Empirical",
      status: "Open",
      phase: "parked",
      warrant: 2,
      ceiling: "A probability for a named endpoint, dose, population, and comparator.",
      next: "Replace \u201Chealthy\u201D with an endpoint: sleep, blood pressure, all-cause mortality, or another measurable outcome. Name the dose, the population, and the comparator. The claim then walks the probability branch as an estimand.",
      detail: "\u201CHealthy\u201D does not pick out one fact. The engine keeps the sentence empirical, because a health effect is the natural reading, and parks it until the endpoint exists. Different endpoints can finish with different probabilities.",
      assumptions: [
        "Read as a claim about a health effect in humans. No endpoint is named."
      ],
      path: spine("empirical", "operate", "check", "independence", "corrupt", "visible", "noisy"),
      standards: standards(
        {
          probabilistic: {
            applies: "yes",
            note: "Once an endpoint exists, the answer is a change in its probability or its magnitude."
          },
          empirical: {
            applies: "yes",
            note: "A health effect is answerable to observation."
          },
          objective: {
            applies: "partial",
            note: "A named endpoint is objective. The word \u201Chealthy\u201D still mixes endpoints."
          },
          verifiable: {
            applies: "partial",
            note: "A trial or a cohort can check a named endpoint. It cannot check the bare word."
          }
        },
        "Waiting on an endpoint before this standard has a claim to judge."
      ),
      trace: traces({
        claim: "Turned into \u201CCoffee is healthy.\u201D",
        scope: "The endpoint, dose, population, and comparator are open. That is why the walk parks.",
        empirical: "A health effect is the kind of reality in play.",
        operate: "The procedure starts when \u201Chealthy\u201D becomes a measurement.",
        check: "The check is public once the endpoint is named.",
        noisy: "Parked. The destination is a probability, and there is nothing to estimate yet."
      })
    });
  }
  function consciousness() {
    return make({
      claim: "Consciousness",
      domain: "Unassigned",
      status: "Waiting",
      phase: "parked",
      warrant: 1,
      ceiling: "Whichever final state belongs to the proposition you have not written yet.",
      next: "Write a proposition. A usable form is \u201CConsciousness is P,\u201D where P has a method: a reported experience, a neural measurement, or a definition inside a stated theory.",
      detail: "The word names a subject. The engine will not assign it a truth-value, a probability, or a proof. The first forced move is a sentence that can hold or fail.",
      path: ["topic", "claim"],
      standards: idle(
        "Waiting on a proposition. None of the six standards has a claim to judge."
      ),
      trace: {
        topic: "\u201CConsciousness\u201D names a subject.",
        claim: "No proposition has been extracted. The walk stops on this gate until one is written."
      }
    });
  }
  function door() {
    return make({
      claim: "Shut the door.",
      domain: "Unassigned",
      status: "Reframed",
      phase: "closed",
      warrant: 7,
      ceiling: "Commands are closed as truth-bearers. A description or an ought about the door can be run as a new topic.",
      next: "To continue, replace the command with a proposition such as \u201CThe door is shut\u201D or \u201CThe door ought to be shut,\u201D and run that sentence.",
      detail: "The sentence tells someone to act. It does not assert a state of the world and it does not assert a value in a form that can be true. The engine closes it as a truth-bearer and leaves the door available to a new claim.",
      path: ["topic", "claim", "apt", "reframe"],
      standards: idle(
        "A command is not a candidate for this standard. A rewritten proposition would be."
      ),
      trace: traces({
        claim: "The imperative is quoted intact.",
        apt: "It cannot hold or fail. It directs.",
        reframe: "Closed as a truth-bearer. A descriptive or normative neighbor can re-enter."
      })
    });
  }
  function earth() {
    return make({
      claim: "The Earth is an oblate spheroid.",
      domain: "Empirical",
      status: "Established",
      phase: "arrived",
      warrant: 6,
      ceiling: "A lawlike geometric claim. Finer radii are a verification, not a different kind of result.",
      next: "Equatorial and polar radii can be measured again and stated to a tolerance. The shape claim is already in its final form.",
      detail: "The engine replaces \u201Cround\u201D with the shape the measurements support: a spheroid flattened at the poles. This canvas does not re-measure the Earth. It places the topic on the lawlike branch, at the established geometric claim.",
      assumptions: [
        "\u201CRound\u201D is read as the geometric claim people usually mean by the sentence, not as a perfect mathematical sphere."
      ],
      path: spine("empirical", "operate", "check", "independence", "corrupt", "visible", "stable"),
      standards: standards(
        {
          probabilistic: {
            applies: "no",
            note: "The shape claim asserts one geometry, not a chance of roundness."
          },
          deterministic: {
            applies: "yes",
            note: "At the scale of the planet, the figure is a single shape with measurable radii."
          },
          empirical: {
            applies: "yes",
            note: "Geodesy is what replaced the loose word."
          },
          objective: {
            applies: "yes",
            note: "The figure of the Earth does not depend on an observer\u2019s preference."
          },
          verifiable: {
            applies: "yes",
            note: "Radii can be measured by public geodetic methods."
          },
          provable: {
            applies: "no",
            note: "The shape is a measured fact about a physical body."
          }
        },
        "Idle."
      ),
      trace: traces({
        claim: "\u201CRound\u201D is replaced with \u201Coblate spheroid.\u201D",
        scope: "The planet as a whole, not a local hillside.",
        empirical: "The shape is answerable to measurement.",
        operate: "Equatorial and polar radii are the procedure.",
        check: "Geodetic measurements are a public check.",
        stable: "Arrived. The spheroid is the final form of this topic."
      })
    });
  }
  function consequence(text) {
    return make({
      claim: text,
      domain: "Empirical",
      status: "Ledger",
      phase: "parked",
      warrant: 5,
      ceiling: "A ledger of what the record shows has followed. The factual question about the event, if there is one, keeps its own finish.",
      next: "Walk each cell alone: arrest, charge, hearing, verdict, oversight, published report. An empty cell stays \u201Cnot established in this record,\u201D and names the filing or report that would move it.",
      detail: "This is the justice walk. It asks what accountable consequence entered the record. Silence in the corpus is a report about the record. It is not a finding that nothing followed. A corroborated arrest does not close the cells after it. Copies of one account do not fill a cell.",
      assumptions: [
        "The question set can be proposed by the engine. A person locks it, and that lock is the objective for the cells downstream."
      ],
      path: spine("empirical", "operate", "check", "independence", "corrupt", "visible", "singular", "followed"),
      standards: standards(
        {
          probabilistic: { applies: "partial", note: "Each cell is a credence about the record until a document moves it." },
          empirical: { applies: "yes", note: "Filings, hearings, and reports are the observations." },
          objective: { applies: "yes", note: "A public document can be shown to anyone who can read it." },
          verifiable: { applies: "partial", note: "The check exists. It counts only when it can be published and answered." },
          provable: { applies: "no", note: "A consequence in the record is established by the document, not derived from axioms." }
        },
        "Idle."
      ),
      trace: traces({
        claim: "Read as a question about the record of what followed, not about what ought to follow.",
        empirical: "The observations are documents in the public record.",
        operate: "Each consequence is its own cell, with a named falsifier.",
        check: "A filing, a charge, a hearing, or a published report is the check.",
        independence: "Another copy of the same account does not move a cell.",
        visible: "The cell counts when the document can be published and answered.",
        singular: "The event, if any, stays on its own walk.",
        followed: "Parked on the ledger. Nothing in the topic establishes a consequence, and the engine will not treat that silence as a fact about the world."
      })
    });
  }
  function asSentence(text) {
    const t = capitalize(text);
    return /[.?!]$/.test(t) ? t : `${t}.`;
  }
  function clearCorruption(text) {
    return make({
      claim: asSentence(text),
      domain: "Empirical",
      status: "Action",
      phase: "parked",
      warrant: 5,
      ceiling: "The corrupt source is off the claim. What remains can still be checked. The tampering has its own ledger.",
      next: "Preserve what remains. Rebuild the claim from checks that are still clean. Open oversight of the tampering, and a charge where the tampering is a crime.",
      detail: "The gathered information is shown to have been destroyed, and the official account rests on it. That source is struck. Destroying it does not prove the opposite account. The action is the justice step: keep what is left, reconstruct without the corrupt file, and enter the tampering on the consequence ledger.",
      assumptions: [
        "\u201CWas destroyed\u201D is read as a completed fact about the file, not as a rumor. An allegation that is still only alleged does not start this action."
      ],
      path: spine("empirical", "operate", "check", "independence", "corrupt", "action"),
      standards: standards(
        {
          empirical: { applies: "yes", note: "The destruction is an event in the world, with traces." },
          objective: { applies: "yes", note: "Independent observers can agree the file is gone, or that it was altered." },
          verifiable: { applies: "partial", note: "What remains can be checked. The destroyed file cannot be rerun." },
          probabilistic: { applies: "partial", note: "The claim that rested on the file falls back to a credence from the clean checks." },
          provable: { applies: "no", note: "Striking a source is not a derivation of the opposite story." }
        },
        "Idle."
      ),
      trace: traces({
        claim: "Read as a claim that the gathered file is gone and that an official account depends on it.",
        empirical: "The destruction is the observation that moves the walk.",
        operate: "Compare what the account used with what can still be examined.",
        check: "An inventory, a custody log, or a surviving copy is the check.",
        independence: "A retelling that the file is gone does not, by itself, show the destruction.",
        corrupt: "The destruction is clear. The file no longer counts for the account that rested on it.",
        action: "Preserve what remains. Rebuild from clean checks. Open the ledger on the tampering."
      })
    });
  }
  function allegedCorruption(text) {
    return make({
      claim: asSentence(text),
      domain: "Empirical",
      status: "Open",
      phase: "parked",
      warrant: 4,
      ceiling: "An accusation of tampering. The action waits on independent traces.",
      next: "Name a trace, independent of the accusation, that the material was altered, destroyed, fabricated, or withheld. Agreement there makes the corruption clear and starts the action.",
      detail: "The sentence alleges corruption in the gathered information. Until independent traces agree, the source stays in place and the justice action does not begin.",
      path: spine("empirical", "operate", "check", "independence", "corrupt"),
      standards: standards(
        {
          empirical: { applies: "partial", note: "Tampering would be observable. The observation is not yet independent of the accusation." },
          verifiable: { applies: "partial", note: "A custody log or a surviving copy would be the check." },
          objective: { applies: "partial", note: "Observers can agree once the trace is independent of the claim." }
        },
        "An allegation is not yet a finding that the file is corrupt."
      ),
      trace: traces({
        claim: asSentence(text),
        corrupt: "Parked. The corruption is alleged. The action has not started."
      })
    });
  }
  function corruptionRoute(text) {
    const l = text.toLowerCase();
    const aboutRecord = /\b(evidence|footage|record|file|report|source|document|tape|shirt|scene|account)\b/.test(l);
    const corruptWord = /\b(destroyed|destroy|fabricated|forged|tampered|altered|withheld|corrupt)/.test(l);
    if (!aboutRecord || !corruptWord) return null;
    if (/\b(alleged|allegedly|accusation|accused|rumou?r|suppose[ds]?|claim that)\b/.test(l)) {
      return allegedCorruption(text);
    }
    return clearCorruption(text);
  }
  function exemplar(n) {
    const routed = corruptionRoute(n);
    if (routed) return routed;
    if (/what followed|consequence|accountability/.test(n)) {
      return consequence("What consequence does the public record show has followed?");
    }
    if (/ban smoking|should ban/.test(n)) return banSmoking();
    if (/smoking|lung cancer/.test(n)) return smoking();
    if (/\brain\b/.test(n)) return rain();
    if (/best song|greatest song|favou?rite song|most beautiful/.test(n)) return song();
    if (/boil|100\s*°\s*c|100\s*degrees/.test(n)) return boiling();
    if (/swan/.test(n)) return swans();
    if (/continuum/.test(n)) return continuum();
    if (/parallel postulate/.test(n)) return parallel();
    if (/ought|reduce suffering/.test(n)) return ought();
    if (/caesar|rubicon/.test(n)) return caesar();
    if (/\bgod\b|afterlife|\bsoul\b/.test(n)) return god();
    if (/coffee/.test(n)) return coffee();
    if (n === "consciousness") return consciousness();
    if (n === "shut the door") return door();
    if (/earth is round|shape of the earth/.test(n)) return earth();
    return null;
  }
  function propositionFrom(input) {
    const stripped = cleaned(input);
    if (!stripped) return { text: "", bare: true };
    let m = stripped.match(/^should\s+(\S+)\s+(.+)$/i);
    if (m) return { text: `${capitalize(m[1])} should ${m[2]}.`, bare: false };
    m = stripped.match(/^(is|are|was|were)\s+(\S+)\s+(.+)$/i);
    if (m) return { text: `${capitalize(m[2])} ${m[1].toLowerCase()} ${m[3]}.`, bare: false };
    m = stripped.match(/^(does|do|did)\s+(\S+)\s+(.+)$/i);
    if (m) {
      const aux = m[1].toLowerCase() === "did" ? "did" : "does";
      return { text: `${capitalize(m[2])} ${aux} ${m[3]}.`, bare: false };
    }
    m = stripped.match(/^(can|will|has|have)\s+(\S+)\s+(.+)$/i);
    if (m) return { text: `${capitalize(m[2])} ${m[1].toLowerCase()} ${m[3]}.`, bare: false };
    const hasVerb = /\b(is|are|was|were|be|been|has|have|had|do|does|did|can|could|will|would|ought|should|may|might|causes|cause|caused|equals|means|raises|increases|contains|contain|proves|exists|exist|makes|make)\b/i.test(
      stripped
    );
    if (!hasVerb) return { text: stripped, bare: true };
    const text = capitalize(stripped);
    return { text: text.endsWith(".") ? text : `${text}.`, bare: false };
  }
  function generic(input) {
    const prop = propositionFrom(input);
    const routed = corruptionRoute(prop.text);
    if (routed) return routed;
    const l = prop.text.toLowerCase();
    if (prop.bare && /\b(beautiful|ugly|best|worst|favou?rite|delicious|prefer|masterpiece|overrated|greatest)\b/.test(
      l
    )) {
      return make({
        claim: `\u201C${prop.text}\u201D expresses a response by a subject.`,
        domain: "Subjective",
        status: "Reframed",
        phase: "parked",
        warrant: 2,
        ceiling: "A checkable report about a named subject, time, and set of alternatives.",
        next: "Name the person, the time, and the alternatives. The report of their preference can be checked. The bare evaluation has no further procedure.",
        detail: "The words evaluate. They do not yet say who is responding, or to which set. The engine parks them on the first-person branch.",
        path: spine("subjective", "report"),
        standards: standards(
          {
            empirical: {
              applies: "partial",
              note: "A named person\u2019s choice is observable as behavior and testimony."
            },
            objective: {
              applies: "no",
              note: "The evaluation, as stated, tracks a subject."
            },
            verifiable: {
              applies: "partial",
              note: "The restated report can be checked. The bare words cannot."
            }
          },
          "Waiting on a report about a named subject."
        ),
        trace: traces({
          claim: "Read as an evaluation rather than as a bare noun.",
          subjective: "The reality in play is a subject\u2019s response.",
          report: "Parked until a person, a time, and a set are named."
        })
      });
    }
    if (prop.bare) {
      return make({
        claim: prop.text,
        domain: "Unassigned",
        status: "Waiting",
        phase: "parked",
        warrant: 1,
        ceiling: "The final state of a proposition that has not been written.",
        next: `Write a sentence that can hold or fail \u2014 for example \u201C${prop.text} is P,\u201D with P tied to a measurement, a report, or a definition.`,
        detail: `\u201C${prop.text}\u201D names a subject. The engine assigns it no truth-value.`,
        path: ["topic", "claim"],
        standards: idle("Waiting on a proposition. None of the six standards has a claim to judge."),
        trace: {
          topic: `\u201C${prop.text}\u201D enters as a subject.`,
          claim: "No proposition is on the table yet."
        }
      });
    }
    const normative = /\b(ought|should|must not|immoral|moral duty|wrong to|right to)\b/.test(l);
    const subjective = /\b(beautiful|ugly|best|worst|favou?rite|delicious|prefer|masterpiece|overrated|greatest)\b/.test(
      l
    );
    const formal = /\b(theorem|lemma|axiom|iff|equation|algebra|geometry|by definition|defined as)\b/.test(l) || /\d+\s*[=+\-*/]/.test(l);
    const probabilistic = /\b(probab|likely|chance|risk|percent|forecast|probably|tends to|odds|might|may)\b/.test(l) || /%/.test(l);
    const future = /\b(will|tomorrow|next week|next year|next month|predict)\b/.test(l);
    const singular = /\b(\d{3,4}\s*(bce|ce|bc|ad)|yesterday|assassinated|invented|founded|crossed|signed)\b/.test(
      l
    );
    const metaphysical = /\b(god|gods|soul|afterlife|karma|destiny|qualia|free will)\b/.test(l);
    const measurable = /\b(correlat|measure|activ|brain|neuron|experiment|study|causes|cause)\b/.test(
      l
    );
    const causal = /\b(causes|cause|raises|increases|leads to|prevents|because)\b/.test(l);
    const universal = /^(all|every|no|none)\b/.test(l);
    const stable = /\b(always|exactly|law of|boils|accelerat|orbits)\b/.test(l);
    const definitional = /\b(by definition|defined as|means the same as)\b/.test(l);
    if ((normative || subjective) && (causal || probabilistic)) {
      return make({
        claim: prop.text,
        domain: "Mixed",
        status: "Open",
        phase: "parked",
        warrant: 2,
        ceiling: "A separate final state for each child: empirical children on the observation branches, the ought or the taste on its own branch.",
        next: "Split the sentence into one claim about the world and one claim about a value or a preference. Walk each child from the start.",
        detail: "The sentence joins kinds of reality that do not share a final state. The engine\u2019s move is the split.",
        assumptions: ["Read as a compound of a worldly claim and a value or a preference."],
        path: spine("mixed", "split"),
        standards: standards(
          {
            probabilistic: { applies: "partial", note: "Only the worldly child can be a probability." },
            empirical: { applies: "partial", note: "Only the worldly child is settled by observation." },
            objective: { applies: "partial", note: "The worldly child can be public. The value or the taste tracks a premise or a subject." },
            verifiable: { applies: "partial", note: "The worldly child can have a rerunnable check." }
          },
          "Applies after the split, to the child that matches it."
        ),
        trace: traces({
          claim: `Held as a compound: ${prop.text}`,
          mixed: "More than one kind of reality is asserted.",
          split: "Parked until the children are written out and walked separately."
        })
      });
    }
    if (normative) {
      return make({
        claim: prop.text,
        domain: "Normative",
        status: "Conditional",
        phase: "parked",
        warrant: 2,
        ceiling: "A conditional on a named value. Empirical parts, once split off, walk the observation branches.",
        next: "Name the agent and the value. Split any factual clause into its own claim and send it through the empirical branch.",
        detail: "The sentence prescribes. Its final state is conditional on the value it assumes.",
        path: spine("normative", "values"),
        standards: standards(
          {
            empirical: { applies: "partial", note: "Factual clauses inside the ought can be split off and checked." },
            objective: { applies: "partial", note: "What follows from a stated value can be agreed. The value is the condition." },
            verifiable: { applies: "partial", note: "The inference from a stated value can be checked." }
          },
          "An ought is not settled by this standard alone."
        ),
        trace: traces({
          claim: prop.text,
          normative: "The claim prescribes.",
          values: "Parked on the value premise."
        })
      });
    }
    if (subjective) {
      return make({
        claim: prop.text,
        domain: "Subjective",
        status: "Reframed",
        phase: "parked",
        warrant: 2,
        ceiling: "A report about a named subject.",
        next: "Name the person, the time, and the set of alternatives. That report can be checked.",
        detail: "The engine reads the sentence as a subject\u2019s response and parks it until that subject is named.",
        path: spine("subjective", "report"),
        standards: standards(
          {
            empirical: { applies: "partial", note: "Choice and testimony record the response." },
            objective: { applies: "no", note: "As stated, the evaluation tracks a subject." },
            verifiable: { applies: "partial", note: "The restated report is the checkable object." }
          },
          "Waiting on a named subject."
        ),
        trace: traces({
          claim: prop.text,
          subjective: "Read as a subject\u2019s response.",
          report: "Parked until the subject and the alternatives are named."
        })
      });
    }
    if (metaphysical && !measurable) {
      return make({
        claim: prop.text,
        domain: "Empirical",
        status: "Stopped",
        phase: "parked",
        warrant: 3,
        ceiling: "A stop until a public observation or a named axiom system is supplied.",
        next: "Name an observation that would count for the claim and one that would count against it, or name axioms and a derivation. The walk continues from whichever you supply.",
        detail: "The sentence has the form of a claim about what exists. No public check and no shared formal system came with it, so the engine stops on method.",
        assumptions: ["Routed under a public-observation standard."],
        path: spine("empirical", "operate", "blocked"),
        standards: standards(
          {
            empirical: { applies: "partial", note: "It would be empirical if a public observation were specified." },
            objective: { applies: "partial", note: "Existence-claims are objective in form. A method is what would make them decidable." }
          },
          "Idle until a method is named."
        ),
        trace: traces({
          claim: prop.text,
          empirical: "Tried under a public-observation standard.",
          operate: "No counting observation is specified.",
          blocked: "Stopped for lack of a method."
        })
      });
    }
    if (definitional || formal && !causal && !future) {
      return make({
        claim: prop.text,
        domain: "Formal",
        status: "Open",
        phase: "parked",
        warrant: 3,
        ceiling: "A derivation from the stated definitions or axioms.",
        next: "Write the definitions or axioms, then a finite derivation. A bare integer sum, or a question of the form \u201CIs n prime?\u201D, is calculated and closed in this canvas.",
        detail: "The sentence belongs inside rules. The engine has not been given a derivation it can check, so it parks on the shared-axiom gate.",
        path: spine("formal", "shared"),
        standards: standards(
          {
            probabilistic: {
              applies: "no",
              note: "A formal claim is aiming at a result fixed by rules, not at a frequency."
            },
            deterministic: {
              applies: "partial",
              note: "A completed system fixes an answer. The rules of this sentence are not written out yet."
            },
            empirical: {
              applies: "no",
              note: "Observation can illustrate a formal claim. The decision procedure is a derivation."
            },
            objective: {
              applies: "yes",
              note: "Anyone who shares the system can check the same derivation."
            },
            verifiable: {
              applies: "partial",
              note: "The verification is the derivation, and it has not been written yet."
            },
            provable: {
              applies: "partial",
              note: "The claim is on the proof track. The proof is the missing move."
            }
          },
          "Idle."
        ),
        trace: traces({
          claim: prop.text,
          formal: "Read as a claim inside a system of rules.",
          shared: "Parked until the system and the derivation are written."
        })
      });
    }
    if (singular && !future) {
      return make({
        claim: prop.text,
        domain: "Empirical",
        status: "Open",
        phase: "parked",
        warrant: 3,
        ceiling: "A credence grounded in independent traces of one event.",
        next: "Name the sources, the date, and what would count as a conflicting trace. The event is not rerun; it is corroborated.",
        detail: "The engine reads this as one past event. Its final form is corroboration by traces, and those traces are not in the topic.",
        path: spine("empirical", "operate", "check", "independence", "corrupt", "visible", "singular"),
        standards: standards(
          {
            probabilistic: { applies: "yes", note: "A singular past event is held with a credence." },
            empirical: { applies: "yes", note: "Traces are the observations." },
            objective: { applies: "yes", note: "The event does not depend on a preference." },
            verifiable: { applies: "partial", note: "Sources can be checked. The event cannot be rerun." }
          },
          "A singular event is not derived from axioms."
        ),
        trace: traces({
          claim: prop.text,
          empirical: "The remains of the event are the evidence.",
          operate: "Source comparison is the procedure.",
          check: "The sources, once named, are a public check.",
          singular: "Parked. No traces have been supplied in the topic."
        })
      });
    }
    if (universal) {
      return make({
        claim: prop.text,
        domain: "Empirical",
        status: "Open",
        phase: "parked",
        warrant: 4,
        ceiling: "Open until a counterinstance appears. One genuine contrary case closes the universal as false.",
        next: "Search for a single counterinstance. Finding one refutes the universal. Failing to find one leaves it open.",
        detail: "The quantifier makes the claim lawlike. The engine parks it on that branch with the contrary-case test as the next move.",
        assumptions: ["Read as an empirical universal, not as a definition."],
        path: spine("empirical", "operate", "check", "independence", "corrupt", "visible", "stable"),
        standards: standards(
          {
            deterministic: { applies: "yes", note: "One contrary case breaks a universal. The quantifier fixes that shape." },
            empirical: { applies: "yes", note: "The instances are in the world." },
            objective: { applies: "yes", note: "A public instance can be shown to observers." },
            verifiable: { applies: "yes", note: "Looking for a counterinstance is a finite kind of check, instance by instance." }
          },
          "Agreement among cases would leave the universal open. It would not prove it."
        ),
        trace: traces({
          claim: prop.text,
          empirical: "The instances are observable.",
          operate: "A contrary instance is the decisive observation.",
          check: "Each instance can be inspected.",
          stable: "Parked. The universal is open, and one counterinstance would close it."
        })
      });
    }
    const noisy = future || probabilistic || causal || !stable;
    if (noisy) {
      return make({
        claim: prop.text,
        domain: "Empirical",
        status: "Open",
        phase: "parked",
        warrant: future || probabilistic ? 3 : 2,
        ceiling: "A probability with a named population, endpoint, and procedure.",
        next: "Name the population, the endpoint, and the procedure that would raise or lower the claim. Then estimate. Score the estimate when an outcome is due.",
        detail: "The engine places the sentence on the probability branch. The words do not fix a single necessary outcome, so a degree is the form the answer has to take. No estimate is invented here.",
        assumptions: ["Read as an empirical claim whose strength is a degree, not a necessity."],
        path: spine("empirical", "operate", "check", "independence", "corrupt", "visible", "noisy"),
        standards: standards(
          {
            probabilistic: {
              applies: "yes",
              note: "The destination is a degree of belief, a frequency, or a chance."
            },
            deterministic: {
              applies: "no",
              note: "The words do not state conditions that force a single outcome."
            },
            empirical: {
              applies: "yes",
              note: "Observation is what can move the degree."
            },
            objective: {
              applies: "partial",
              note: "A stated procedure would let observers agree. The procedure is not fully stated."
            },
            verifiable: {
              applies: "partial",
              note: "A check can be built once the endpoint and the procedure are named."
            },
            provable: {
              applies: "no",
              note: "The closing instrument for this claim is an estimate that can be scored."
            }
          },
          "Idle."
        ),
        trace: traces({
          claim: prop.text,
          empirical: "The claim is about the world.",
          operate: "An endpoint and a procedure are still required.",
          check: "The check becomes public when those are named.",
          noisy: "Parked on the probability branch. No number is invented."
        })
      });
    }
    return make({
      claim: prop.text,
      domain: "Empirical",
      status: "Open",
      phase: "parked",
      warrant: 3,
      ceiling: "A lawlike result under stated conditions, verified by measurement.",
      next: "State the conditions that fix the regime, and the measurement that would confirm or correct it.",
      detail: "The engine reads the sentence as one regime under fixed conditions, and parks it until those conditions and the measurement are explicit.",
      path: spine("empirical", "operate", "check", "independence", "corrupt", "visible", "stable"),
      standards: standards(
        {
          probabilistic: { applies: "partial", note: "Measurement error is a spread around the stated regime." },
          deterministic: { applies: "yes", note: "The claim asserts one outcome once its conditions are fixed." },
          empirical: { applies: "yes", note: "A measurement is what confirms or corrects it." },
          objective: { applies: "yes", note: "A stated measurement is observer-independent." },
          verifiable: { applies: "partial", note: "The trial exists once the conditions are written down." }
        },
        "The confirming trial is a measurement, not a derivation from axioms."
      ),
      trace: traces({
        claim: prop.text,
        empirical: "The regime is in the world.",
        operate: "Conditions and a measurement are the procedure.",
        check: "The trial, once specified, is public.",
        stable: "Parked until the conditions are explicit."
      })
    });
  }
  const EMPTY = make({
    claim: "No topic yet.",
    domain: "Unassigned",
    status: "Waiting",
    phase: "parked",
    warrant: 0,
    ceiling: "A proposition is required before any standard applies.",
    next: "Enter a subject, a question, or a claim.",
    detail: "The engine starts from words. It will not invent a proposition.",
    path: ["topic"],
    standards: idle("Waiting on a topic."),
    trace: { topic: "Waiting for a topic." }
  });
  function analyze(input) {
    const c = cleaned(input ?? "");
    if (!c) return EMPTY;
    return arithmetic(c) ?? primality(c) ?? exemplar(norm(c)) ?? generic(c);
  }
  return __toCommonJS(truth_engine_exports);
})();
